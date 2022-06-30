import { Box3, Vector3, Mesh, MeshPhongMaterial, MeshStandardMaterial } from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { ColladaLoader } from "three/examples/jsm/loaders/ColladaLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { DDSLoader } from "three/examples/jsm/loaders/DDSLoader";
import { LoadingManager } from "three/src/loaders/LoadingManager";
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";

const box = new Box3();
const manager = (new LoadingManager());
manager.addHandler(/\.dds$/i, new DDSLoader());

// get box size
function getSize(obj) {
  box.setFromObject(obj);
  return box.getSize(new Vector3());
}

// get box center
function getCenter(obj) {
  box.setFromObject(obj);
  return box.getCenter(new Vector3());
}

// auto select model loader
function getLoader(filePath) {
  // Get file extension
  let fileExtension = filePath.split(".").filter(i => i)[1];
  // gltf type has two formats, .gltf and .glb, so make fileExtension glb to gltf
  if (fileExtension === "glb") {
    fileExtension = "gltf";
  }
  let obj = {
    loader: null,
    getObject: null
  }; // obj {loader, getObject}
  switch (fileExtension) {
    case "dae":
      obj = {
        loader: new ColladaLoader(),
        getObject: (collada) => {
          return collada.scene;
        }
      };
      break;
    case "fbx":
      obj = {
        loader: new FBXLoader()
      };
      break;
    case "gltf":
      obj = {
        loader: new GLTFLoader()
      };
      break;
    case "obj":
      obj = {
        loader: new OBJLoader(manager)
      };
      break;
    case "ply":
      obj = {
        loader: new PLYLoader(),
        getObject: (geometry) => { // geometry
          geometry.computeVertexNormals();
          return new Mesh(geometry, new MeshStandardMaterial());
        }
      };
      break;
    case "stl":
      obj = {
        loader: new STLLoader(),
        getObject: (geometry) => { // geometry
          return new Mesh(geometry, new MeshPhongMaterial());
        }
      };
      break;
  }
  return obj;
}

function getMTLLoader() {
  const mtlLoader = new MTLLoader(manager);
  return mtlLoader;
}

export {
  getSize,
  getCenter,
  getLoader,
  getMTLLoader
}