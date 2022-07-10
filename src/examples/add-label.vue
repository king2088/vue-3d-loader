<template>
  <vue3dLoader filePath="/models/gltf/DamagedHelmet.gltf" backgroundColor="#cccccc" :imagesLabel="imagesLabel" :scale="{x:0.5, y: 0.5, z:0.5}" />
</template>
<script>
export default {
  data() {
    return {
      imagesLabel: [
        // image label
        {
          image: "./assets/label1.png",
          spriteMaterialColor: '#ffffff', // default: #ffffff
          position: { x: -0.5, y: 1, z: 0 },
          scale: { x: 0.6, y: 0.6, z: 0.6 },
          sid: 1, // 自定义标识，可有可无
        },
        {
          image: "./assets/label2.png",
          position: { x: 0.5, y: 1.2, z: 0 },
          scale: { x: 1, y: 1, z: 1 },
          sid: 2, // 自定义标识，可有可无
        },
        // text label
        {
          text: "I'm Text Label",
          position: { x: 0, y: 2, z: 0 },
          scale: { x: 1.5, y: 0.8, z: 0 },
          textStyle: {
            fontFamily: '微软雅黑',
            fontSize: 12,
            fontWeight: 600,
            lineHeight: 1,
            color: '#ffffff',
            borderWidth: 8,
            borderRadius: 4,
            borderColor: '#cccccc',
            backgroundColor: 'rgba(0,0,0,0.8)'
          },
          sid: 3, // 自定义标识，可有可无
        },
      ],
    };
  },
};
</script>