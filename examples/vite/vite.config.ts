import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // resolve: {
  //   dedupe: ['react', 'react-dom', 'react/jsx-runtime', 'urql'],
  // },
  server: {
    proxy: {
      "/api": {
        target: "https://client.api.basta.app",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
