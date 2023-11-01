<template>
  <vue3dLoader
    filePath="/models/collada/elf/elf.dae"
    :lights="lights"
    :cameraPosition="{ x: 0, y: -10, z: 10 }"
    :pointLightFollowCamera="true"
  />
</template>
<script>
export default {
  data() {
    return {
      lights: [
        {
          type: "pointlight",
          color: "#fff",
          position: { x: 0, y: 0, z: 400 },
          intensity: 1
        }
      ],
    };
  },
};
</script>