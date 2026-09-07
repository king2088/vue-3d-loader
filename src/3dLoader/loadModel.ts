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

const box: Box3 = new Box3();
const manager: LoadingManager = new LoadingManager();
// Cache resolved loader so repeated loads of the same extension don't re-download the chunk
const loaderCache = new Map<string, Promise<LoaderCallbacks>>();

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

async function withCache(
  key: string,
  factory: () => Promise<LoaderCallbacks>
): Promise<LoaderCallbacks> {
  let cached = loaderCache.get(key);
  if (!cached) {
    cached = factory();
    loaderCache.set(key, cached);
  }
  return cached;
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

/**
 * Auto select model loader. Each loader is dynamically imported (code-split),
 * so the main bundle does not need to ship every loader implementation.
 */
function getLoader(
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

  const cacheKey = fileExtension === "gltf" ? `gltf:${isDraco}` : fileExtension;
  return withCache(cacheKey, () => createLoader(fileExtension, isDraco, plyMaterial, dracoDir));
}

async function createLoader(
  fileExtension: string,
  isDraco: boolean,
  plyMaterial: string,
  dracoDir?: string
): Promise<LoaderCallbacks> {
  await ensureTextureHandlers();

  switch (fileExtension) {
    case "dae": {
      const { ColladaLoader } = await import("three/examples/jsm/loaders/ColladaLoader.js");
      return {
        loader: new ColladaLoader(manager),
        getObject: (collada: any) => collada.scene,
      };
    }
    case "fbx": {
      const { FBXLoader } = await import("three/examples/jsm/loaders/FBXLoader.js");
      return { loader: new FBXLoader(manager) };
    }
    case "gltf": {
      const gltfModule = await import("three/examples/jsm/loaders/GLTFLoader.js");
      const loader = new gltfModule.GLTFLoader(manager);
      if (isDraco) {
        const { DRACOLoader } = await import("three/examples/jsm/loaders/DRACOLoader.js");
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath(dracoDir || "assets/draco/gltf/");
        dracoLoader.setDecoderConfig({ type: "js" });
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
    }
    case "obj": {
      const { OBJLoader } = await import("three/examples/jsm/loaders/OBJLoader.js");
      return { loader: new OBJLoader(manager) };
    }
    case "ply": {
      const { PLYLoader } = await import("three/examples/jsm/loaders/PLYLoader.js");
      return {
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
      };
    }
    case "stl": {
      const { STLLoader } = await import("three/examples/jsm/loaders/STLLoader.js");
      return {
        loader: new STLLoader(manager),
        getObject: (geometry: any) => new Mesh(geometry, new MeshPhongMaterial()),
      };
    }
    case "json": {
      return { loader: new ObjectLoader(manager) };
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