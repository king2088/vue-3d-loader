<template>
  <vue3dLoader
    filePath="/models/fbx/nurbs.fbx"
    backgroundColor="#cccccc"
    :textLabel="textLabel"
    @load="onLoad"
  />
</template>
<script>
export default {
  data() {
    return {
      textLabel: [
        {
          text: "头盔",
          divStyle: {
            width: "80px",
            marginTop: "-1em",
            backgroundColor: 'red'
          },
          position: { x: 0, y: 1, z: 0 },
        },
      ],
    };
  },
  methods: {
    onLoad(OBJ) {
      console.log("OBJ", OBJ);
    },
  },
};
</script>