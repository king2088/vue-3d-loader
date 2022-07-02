<template>
  <vue3dLoader
    filePath="/models/collada/elf/elf.dae"
    :lights="lights"
    :cameraPosition="{ x: 0, y: -10, z: 10 }"
  />
</template>
<script>
export default {
  data() {
    return {
      lights: [
        {
          type: "AmbientLight",
          color: "red",
        },
        {
          type: "DirectionalLight",
          position: { x: 100, y: 10, z: 100 },
          color: "green",
          intensity: 0.8,
        },
      ],
    };
  },
};
</script>