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
      { find: "@_context", replacement: resolve(__dirname, "src/contexts") },
      { find: "@_hook", replacement: resolve(__dirname, "src/hooks") },
      { find: "@_lib", replacement: resolve(__dirname, "src/lib") },
      { find: "@_page", replacement: resolve(__dirname, "src/pages") },
      { find: "@_provider", replacement: resolve(__dirname, "src/providers") },
      { find: "@_service", replacement: resolve(__dirname, "src/service") },
      { find: "@_style", replacement: resolve(__dirname, "src/styles") },
      { find: "@_type", replacement: resolve(__dirname, "src/types") },
    ],
  },
});
