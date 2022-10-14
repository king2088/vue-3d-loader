import { Box3, Vector3, Mesh, MeshPhongMaterial, MeshStandardMaterial, Object3D, ObjectLoader } from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { ColladaLoader } from "three/examples/jsm/loaders/ColladaLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { DDSLoader } from "three/examples/jsm/loaders/DDSLoader";
import { LoadingManager } from "three/src/loaders/LoadingManager";
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { TGALoader } from "three/examples/jsm/loaders/TGALoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

const box: Box3 = new Box3();
const manager: LoadingManager = new LoadingManager();
manager.addHandler(/\.dds$/i, new DDSLoader());
manager.addHandler(/\.tga$/i, new TGALoader());

interface loaderObj {
  loader: any;
  getObject?: any;
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
  } else {
    let extension: any = pathSplit.pop();
    extension = extension.toLowerCase();
    return extension;
  }
}

// auto select model loader
function getLoader(filePath: string, fileType: string, isDraco: boolean, dracoDir?: string) {
  let fileExtension: string
  if (fileType) {
    // Custom file extension
    fileExtension = fileType
  } else {
    // Get file extension
    fileExtension = getExtension(filePath);
  }
  // gltf type has two formats, .gltf and .glb, so make fileExtension glb to gltf
  if (fileExtension === "glb") {
    fileExtension = "gltf";
  }
  let obj: loaderObj = {
    loader: null,
    getObject: null
  } // obj {loader, getObject}
  switch (fileExtension) {
    case "dae":
      obj = {
        loader: new ColladaLoader(manager),
        getObject: (collada: any) => {
          return collada.scene;
        },
      };
      break;
    case "fbx":
      obj = {
        loader: new FBXLoader(manager),
      };
      break;
    case "gltf":
      obj = {
        loader: new GLTFLoader(manager),
        getObject: (gltf: any) => {
          const object = gltf.scene
          // resolve gltf animations lose
          if (gltf.animations) {
            object.animations = gltf.animations;
          }
          return object;
        },
      };
      enableDraco(isDraco, obj, dracoDir)
      break;
    case "obj":
      obj = {
        loader: new OBJLoader(manager),
      };
      break;
    case "ply":
      obj = {
        loader: new PLYLoader(manager),
        getObject: (geometry: any) => { // geometry
          geometry.computeVertexNormals();
          return new Mesh(geometry, new MeshStandardMaterial());
        },
      };
      break;
    case "stl":
      obj = {
        loader: new STLLoader(manager),
        getObject: (geometry: any) => { // geometry
          return new Mesh(geometry, new MeshPhongMaterial())
        },
      };
      break;
    case "json":
      obj = {
        loader: new ObjectLoader(manager),
      };
      break;
  }
  return obj;
}

function getMTLLoader() {
  const mtlLoader = new MTLLoader(manager);
  return mtlLoader;
}

function enableDraco(isDraco: boolean, obj: loaderObj, dir?: string) {
  // draco loader
  if (isDraco) {
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath(dir || "assets/draco/gltf/");
    dracoLoader.setDecoderConfig({ type: "js" });
    obj.loader.setDRACOLoader(dracoLoader);
  }
}

export {
  getSize,
  getCenter,
  getLoader,
  getMTLLoader
}
