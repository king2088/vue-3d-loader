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

// Default Draco decoder: wasm decoder hosted on Google's public CDN.
// Override with the `dracoDir` prop for self-hosted decoders.
const DEFAULT_DRACO_DECODER_PATH = "https://www.gstatic.com/draco/v1/decoders/";

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

  const cacheKey = fileExtension === "gltf" ? `gltf:${isDraco}` : fileExtension;
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
          dracoLoader.setDecoderPath(dracoDir || DEFAULT_DRACO_DECODER_PATH);
          dracoLoader.preload();
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
      return (manager) => ({ loader: new ObjectLoader(manager) });
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