import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@_asset", replacement: resolve(__dirname, "src/assets") },
      {
        find: "@_component",
        replacement: resolve(__dirname, "src/components"),
      },
      { find: "@_page", replacement: resolve(__dirname, "src/pages") },
      { find: "@_style", replacement: resolve(__dirname, "src/styles") },
    ],
  },
});
