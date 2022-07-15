import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import VueSetupExtend from "vite-plugin-vue-setup-extend";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isRelease = mode === "production";
  const entryFile = isRelease ? "src/index.ts" : "src/main.ts";
  let config = {
    plugins: [vue(), VueSetupExtend()],
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
          formats: ["es", "cjs", "iife"], // "umd"
          entry: path.resolve(__dirname, entryFile),
          name: "vue3dLoader",
          fileName: (format) => {
            const fileName = "vue-3d-loader";
            if (format === "es") {
              return `${fileName}.esm.js`;
            }
            if (format === "iife") {
              return `${fileName}.global.js`;
            }
            return `${fileName}.${format}.js`;
          },
        },
        rollupOptions: {
          external: ["vue"],
          output: {
            globals: {
              vue: "Vue",
            },
          },
        },
      },
    };
    config = { ...config, ...build };
  }

  if (mode === 'examples') {
    const base = {
      base: "/vue-3d-loader/examples-demo/"
    }
    config = { ...config, ...base }
  }
  return config;
});
