import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(({
  command
}) => {
  const isProduction = command === 'build';
  return {
    plugins: [vue()],
    base: isProduction ? "/monimentor.github.io/" : "/",
    build: {
      outDir: "docs", // Output to the docs folder for GitHub Pages
      assetsDir: "assets", // Ensure assets are placed in a subdirectory
    },
  };
});
