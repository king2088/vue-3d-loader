import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// Build the library for direct <script> tag usage (window.vue3dLoader / window.vue).
// UMD/IIFE cannot emit code-splitting, so all dynamic imports are inlined
// into a single file.
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: "dist",
    emptyOutDir: false,
    chunkSizeWarningLimit: 1200,
    sourcemap: true,
    lib: {
      formats: ["iife"],
      entry: path.resolve(process.cwd(), "src/index.ts"),
      name: "vue3dLoader",
      fileName: () => "vue-3d-loader.min.js",
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        globals: { vue: "Vue" },
      },
      external: ["vue"],
    },
  },
});