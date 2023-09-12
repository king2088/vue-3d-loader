import { Box3, Vector3 } from 'three'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { ColladaLoader } from 'three/examples/jsm/loaders/ColladaLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import { DDSLoader } from 'three/examples/jsm/loaders/DDSLoader'
import { LoadingManager } from 'three/src/loaders/LoadingManager'
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'

const box = new Box3()

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
  let loader = null
  switch (fileExtension) {
    case 'dae':
      loader = _daeLoader(crossOrigin)
      break
    case 'fbx':
      loader = new FBXLoader()
      break
      // gltf
    case 'gltf':
      loader = _gltfLoader(crossOrigin, requestHeader)
      break
    case 'obj':
      loader = _objLoader(crossOrigin, requestHeader)
    case 'ply':
      loader = new PLYLoader()
    case 'stl':
      loader = new STLLoader()
  }
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

function _objLoader(crossOrigin, requestHeader) {
  const manager = (new LoadingManager())
  manager.addHandler(/\.dds$/i, new DDSLoader())
  const objLoader = new OBJLoader(manager)
  const mtlLoader = new MTLLoader(manager)
  mtlLoader.setCrossOrigin(crossOrigin)
  mtlLoader.setRequestHeader(requestHeader)
  objLoader.setRequestHeader(requestHeader)
  return {
    objLoader,
    mtlLoader
  }
}

export {
  getSize,
  getCenter,
  getLoader
}