<template>
  <vue3dLoader
    :filePath="filePath"
    :scale="{ x: 0.4, y: 0.4, z: 0.4 }"
    :cameraPosition="{ x: 100, y: 200, z: 30 }"
    :parallelLoad="true"
  ></vue3dLoader>
</template>
<script>
export default {
  data() {
    return {
      filePath: [
        "/vue-3d-loader/example-demo/models/fbx/Samba Dancing.fbx",
        "/vue-3d-loader/example-demo/models/collada/pump/pump.dae",
        "/vue-3d-loader/example-demo/models/ply/Lucy100k.ply",
      ],
    };
  },
};
</script>