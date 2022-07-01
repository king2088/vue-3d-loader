<template>
  <div id="app">
    <vExamples />
  </div>
</template>

<script>
import vExamples from "./examples/exampleIndex.vue";

export default {
  name: "App",
  components: {
    vExamples,
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
