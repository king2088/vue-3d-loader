import {
  Box3,
  Vector3,
  Mesh,
  MeshPhongMaterial,
  MeshStandardMaterial
} from 'three'
import {
  FBXLoader
} from 'three/examples/jsm/loaders/FBXLoader'
import {
  ColladaLoader
} from 'three/examples/jsm/loaders/ColladaLoader'
import {
  GLTFLoader
} from 'three/examples/jsm/loaders/GLTFLoader'
import {
  OBJLoader
} from 'three/examples/jsm/loaders/OBJLoader'
import {
  MTLLoader
} from 'three/examples/jsm/loaders/MTLLoader'
import {
  DDSLoader
} from 'three/examples/jsm/loaders/DDSLoader'
import {
  LoadingManager
} from 'three/src/loaders/LoadingManager'
import {
  PLYLoader
} from 'three/examples/jsm/loaders/PLYLoader'
import {
  STLLoader
} from 'three/examples/jsm/loaders/STLLoader'

const box = new Box3()
const manager = (new LoadingManager())
manager.addHandler(/\.dds$/i, new DDSLoader())

// get box size
function getSize(obj) {
  box.setFromObject(obj)
  return box.getSize(new Vector3())
}

// get box center
function getCenter(obj) {
  box.setFromObject(obj)
  return box.getCenter(new Vector3())
}

// auto select model loader params: {crossOrigin, requestHeader}
function getLoader(filePath, params = {}) {
  // Get file extension
  const {
    crossOrigin,
    requestHeader
  } = params

  let fileExtension = filePath.split('.').filter(i => i)[1]
  // gltf type has two formats, .gltf and .glb, so make fileExtension glb to gltf
  if (fileExtension === 'glb') {
    fileExtension = 'gltf'
  }
  let obj = {
    loader: null,
    getObject: null,
    mtlLoader: null
  } // obj {loader, getObject, mtlLoader}
  switch (fileExtension) {
    case 'dae':
      obj = {
        loader: _daeLoader(crossOrigin),
        getObject: (collada) => {
          return collada.scene
        }
      }
      break
    case 'fbx':
      obj = {
        loader: new FBXLoader()
      }
      break
      // gltf
    case 'gltf':
      obj = {
        loader: _gltfLoader(crossOrigin, requestHeader)
      }
      break
    case 'obj':
      obj = {
        loader: _objLoader(requestHeader),
        getObject: null,
        mtlLoader: _mtlLoader(crossOrigin, requestHeader)
      }
      break
    case 'ply':
      obj = {
        loader: new PLYLoader(),
        getObject: (geometry) => { // geometry
          geometry.computeVertexNormals()
          return new Mesh(geometry, new MeshStandardMaterial())
        }
      }
      break
    case 'stl':
      obj = {
        loader: new STLLoader(),
        getObject: (geometry) => { // geometry
          return new Mesh(geometry, new MeshPhongMaterial())
        }
      }
      break
  }
  return obj
}

function _daeLoader(crossOrigin) {
  let loader = new ColladaLoader()
  if (crossOrigin) {
    loader.setCrossOrigin(crossOrigin)
  }
  return loader
}

function _gltfLoader(crossOrigin, requestHeader) {
  let loader = new GLTFLoader()
  if (crossOrigin) {
    loader.setCrossOrigin(crossOrigin)
  }
  if (requestHeader) {
    loader.setRequestHeader(requestHeader)
  }
  return loader
}

function _objLoader(requestHeader) {
  const objLoader = new OBJLoader(manager)
  objLoader.setRequestHeader(requestHeader)
  return objLoader
}

function _mtlLoader(crossOrigin, requestHeader) {
  const mtlLoader = new MTLLoader(manager)
  mtlLoader.setCrossOrigin(crossOrigin)
  mtlLoader.setRequestHeader(requestHeader)
}

export {
  getSize,
  getCenter,
  getLoader
}