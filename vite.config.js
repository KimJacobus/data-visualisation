
import { defineConfig } from "vite";
import { resolve } from "path";
import topLevelAwait from "vite-plugin-top-level-await"; 


// https://vitejs.dev/config/
export default defineConfig({
  
  root: "src",
  base: "/data-visualisation/",
  plugins: [

    topLevelAwait({
      // The export name of top-level await promise for each chunk module
      promiseExportName: "__tla",
      // The function to generate import names of top-level await promise in each chunk module
      promiseImportName: i => `__tla_${i}`
    })
  ],


  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
      },
    },
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
});