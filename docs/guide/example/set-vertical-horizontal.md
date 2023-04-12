# Set camera vertical/horizontal rotation

<SetVerticalHorizontal  />

```vue
<template>
  <div class="controls">
    <div class="buttons">
      <!-- enable horizontal rotation -->
      <button @click="setHorizontal()">
        Only {{ horizontalCtrl ? "disable" : "enable" }} horizontal
      </button>
      <!-- enable vertical rotation -->
      <button @click="setVertical()">
        Only {{ verticalCtrl ? "disable" : "enable" }} vertical
      </button>
      <!-- set horizontal rotation min/max angle -->
      <button @click="setHorizontal('range')">
        set horizontal rotation value range
      </button>
      <!-- set vertical rotation min/max angle -->
      <button @click="setVertical('range')">
        set vertical rotation value range
      </button>
    </div>
    <vue3dLoader
      v-if="!refersh"
      filePath="/models/collada/stormtrooper/stormtrooper.dae"
      :scale="{ x: 0.1, y: 0.1, z: 0.1 }"
      :verticalCtrl="verticalCtrl"
      :horizontalCtrl="horizontalCtrl"
    />
  </div>
</template>
<script lang="ts" setup>
import { nextTick, ref } from "vue";
const verticalCtrl: any = ref(false);
const horizontalCtrl: any = ref(false);
const refersh = ref(false);

function setVertical(type?: string) {
  horizontalCtrl.value = false;
  if (type === "range") {
    // set vertical angle range
    verticalCtrl.value = { min: 0, max: 1 };
  } else {
    verticalCtrl.value = true;
    // horizontalCtrl.value = { min: 0, max: Math.PI };
  }
  refersh3d();
}

function setHorizontal(type?: string) {
  verticalCtrl.value = false;
  if (type === "range") {
    // set horizontal angle range
    horizontalCtrl.value = { min: 1, max: 2 };
  } else {
    horizontalCtrl.value = true;
    // verticalCtrl.value = { min: -Math.PI, max: Math.PI };
  }
  refersh3d();
}

function refersh3d() {
  refersh.value = true;
  nextTick(() => {
    refersh.value = false;
  });
}
</script>
```