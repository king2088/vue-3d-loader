import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

const entryFile = (mode: string) =>
  mode === "production" ? "src/index.ts" : "src/main.ts";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isRelease = mode === "production";
  let config: any = {
    plugins: [vue()],
    build: {
      outDir: "examples-demo",
    },
  };
  if (isRelease) {
    const build = {
      build: {
        outDir: "dist",
        chunkSizeWarningLimit: 1000,
        lib: {
          formats: ["es", "cjs"], // iife/global is built by vite.config.global.ts
          entry: path.resolve(process.cwd(), entryFile(mode)),
          name: "vue3dLoader",
          fileName: (format: string) => {
            const fileName = "vue-3d-loader";
            if (format === "es") {
              return `${fileName}.esm.js`;
            }
            return `${fileName}.${format}.js`;
          },
        },
        rollupOptions: {
          output: {
            // dynamic imports / code-splitting is enabled for es + cjs,
            // so every model loader becomes an independently loaded chunk
            manualChunks: undefined,
          },
          external: ["vue"],
        },
      },
    };
    config = { ...config, ...build };
  }

  if (mode === "examples") {
    const base = {
      base: "/vue-3d-loader/examples-demo/",
    };
    config = { ...config, ...base };
  }
  return config;
});