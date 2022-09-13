<template>
  <vue3dLoader
    :filePath="'/models/collada/elf/elf.dae'"
    :cameraPosition="{ x: 0, y: -10, z: 13 }"
    :enableDamping="true"
    :dampingFactor="0.05"
  />
</template>