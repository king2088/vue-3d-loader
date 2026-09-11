import {
  Box3,
  Vector3,
  Mesh,
  MeshPhongMaterial,
  MeshStandardMaterial,
  MeshBasicMaterial,
  Object3D,
  ObjectLoader,
  LoadingManager,
  SRGBColorSpace,
  type Loader,
} from "three";

interface LoaderCallbacks {
  loader: Loader;
  getObject?: (...args: any[]) => Object3D;
}

type LoaderFactory = (manager: LoadingManager) => LoaderCallbacks;

const box: Box3 = new Box3();
const manager: LoadingManager = new LoadingManager();
// Cache dynamic-import factories (which loader *module* to use), NOT loader
// instances. Each load() call gets a fresh Loader instance so concurrent or
// multi-instance loads never step on each other's callbacks.
const factoryCache = new Map<string, Promise<LoaderFactory>>();

let textureHandlersReady = false;

async function ensureTextureHandlers() {
  if (textureHandlersReady) return;
  const [{ DDSLoader }, { TGALoader }] = await Promise.all([
    import("three/examples/jsm/loaders/DDSLoader.js"),
    import("three/examples/jsm/loaders/TGALoader.js"),
  ]);
  manager.addHandler(/\.dds$/i, new DDSLoader());
  manager.addHandler(/\.tga$/i, new TGALoader());
  textureHandlersReady = true;
}

// get box size
function getSize(obj: Object3D) {
  box.setFromObject(obj);
  return box.getSize(new Vector3());
}

// get box center
function getCenter(obj: Object3D) {
  box.setFromObject(obj);
  return box.getCenter(new Vector3());
}

function getExtension(str: string) {
  const pathSplit = str.split(".");
  if (pathSplit.length <= 1) {
    return "";
  }
  return pathSplit.pop()!.toLowerCase();
}

// Texture slots that carry color data. Since three r152 those must be marked
// SRGBColorSpace or they get interpreted as linear and render washed out.
// GLTFLoader does this internally; ObjectLoader (JSON) does not, so we apply
// the same convention here.
const COLOR_TEXTURE_SLOTS = [
  "map",
  "lightMap",
  "emissiveMap",
  "specularMap",
  "aoMap",
  "matcap",
] as const;

function setTextureColorSpace(object: Object3D) {
  object.traverse((child: any) => {
    if (!child.isMesh) return;
    const materials = Array.isArray(child.material)
      ? child.material
      : [child.material];
    materials.forEach((material: any) => {
      if (!material) return;
      COLOR_TEXTURE_SLOTS.forEach((slot) => {
        const texture = material[slot];
        if (texture && texture.isTexture && texture.colorSpace !== SRGBColorSpace) {
          texture.colorSpace = SRGBColorSpace;
          texture.needsUpdate = true;
          material.needsUpdate = true;
        }
      });
    });
  });
}

// Default Draco decoder path: self-hosted. Download draco.7z from the three.js
// repo (https://github.com/mrdoob/three.js/tree/dev/examples/jsm/libs/draco) and
// unzip it into <your site>/assets/draco/gltf/. This keeps decoding fully offline
// and works anywhere (www.gstatic.com is unreachable in mainland China).
// For a CDN instead, pass `dracoDir`, e.g. the jsdelivr mirror:
//   https://cdn.jsdelivr.net/npm/three@0.185.0/examples/jsm/libs/draco/
const DEFAULT_DRACO_DECODER_PATH = "assets/draco/gltf/";

// DRACOLoader concatenates decoderPath with the file name directly,
// so a missing trailing slash would produce a broken URL.
function normalizeDracoDir(dir?: string): string {
  const path = (dir || "").trim();
  if (!path) {
    return DEFAULT_DRACO_DECODER_PATH;
  }
  return path.endsWith("/") ? path : `${path}/`;
}

/**
 * Auto select model loader. Each loader module is dynamically imported
 * (code-split) and its import promise is cached, while a brand new Loader
 * instance is created for every load call.
 */
async function getLoader(
  filePath: string,
  fileType: string,
  isDraco: boolean,
  plyMaterial: string,
  dracoDir?: string
): Promise<LoaderCallbacks> {
  let fileExtension = fileType || getExtension(filePath);
  // gltf type has two formats, .gltf and .glb, so make fileExtension glb to gltf
  if (fileExtension === "glb") {
    fileExtension = "gltf";
  }

  await ensureTextureHandlers();

  const cacheKey =
    fileExtension === "gltf"
      ? `gltf:${isDraco}:${isDraco ? normalizeDracoDir(dracoDir) : ""}`
      : fileExtension;
  let factory = factoryCache.get(cacheKey);
  if (!factory) {
    factory = createFactory(fileExtension, isDraco, plyMaterial, dracoDir);
    factoryCache.set(cacheKey, factory);
  }
  // fresh Loader instance per call — safe for concurrent/multi-instance loads
  return (await factory)(manager);
}

async function createFactory(
  fileExtension: string,
  isDraco: boolean,
  plyMaterial: string,
  dracoDir?: string
): Promise<LoaderFactory> {
  switch (fileExtension) {
    case "dae": {
      const { ColladaLoader } = await import("three/examples/jsm/loaders/ColladaLoader.js");
      return (manager) => ({
        loader: new ColladaLoader(manager),
        getObject: (collada: any) => collada.scene,
      });
    }
    case "fbx": {
      const { FBXLoader } = await import("three/examples/jsm/loaders/FBXLoader.js");
      return (manager) => ({ loader: new FBXLoader(manager) });
    }
    case "gltf": {
      const gltfModule = await import("three/examples/jsm/loaders/GLTFLoader.js");
      const { DRACOLoader } = isDraco
        ? await import("three/examples/jsm/loaders/DRACOLoader.js")
        : { DRACOLoader: null as unknown as new () => import("three/examples/jsm/loaders/DRACOLoader.js").DRACOLoader };
      return (manager) => {
        const loader = new gltfModule.GLTFLoader(manager);
        if (isDraco && DRACOLoader) {
          const dracoLoader = new DRACOLoader();
          dracoLoader.setDecoderPath(normalizeDracoDir(dracoDir));
          // the decoder wasm is fetched lazily on the first draco decode,
          // so a missing/offline decoder dir only errors when actually needed
          loader.setDRACOLoader(dracoLoader);
        }
        return {
          loader,
          getObject: (gltf: any) => {
            const object = gltf.scene;
            // resolve gltf animations lose
            if (gltf.animations) {
              object.animations = gltf.animations;
            }
            return object;
          },
        };
      };
    }
    case "obj": {
      const { OBJLoader } = await import("three/examples/jsm/loaders/OBJLoader.js");
      return (manager) => ({ loader: new OBJLoader(manager) });
    }
    case "ply": {
      const { PLYLoader } = await import("three/examples/jsm/loaders/PLYLoader.js");
      return (manager) => ({
        loader: new PLYLoader(manager),
        getObject: (geometry: any) => {
          geometry.computeVertexNormals();
          // Set ply model material
          return new Mesh(
            geometry,
            plyMaterial === "MeshStandardMaterial"
              ? new MeshStandardMaterial()
              : new MeshBasicMaterial({ vertexColors: true })
          );
        },
      });
    }
    case "stl": {
      const { STLLoader } = await import("three/examples/jsm/loaders/STLLoader.js");
      return (manager) => ({
        loader: new STLLoader(manager),
        getObject: (geometry: any) => new Mesh(geometry, new MeshPhongMaterial()),
      });
    }
    case "json": {
      return (manager) => ({
        loader: new ObjectLoader(manager),
        getObject: (object: any) => {
          setTextureColorSpace(object);
          return object;
        },
      });
    }
    default:
      throw new Error(`Unsupported model file type: "${fileExtension || "unknown"}"`);
  }
}

async function getMTLLoader() {
  const { MTLLoader } = await import("three/examples/jsm/loaders/MTLLoader.js");
  return new MTLLoader(manager);
}

export {
  getSize,
  getCenter,
  getLoader,
  getMTLLoader
}