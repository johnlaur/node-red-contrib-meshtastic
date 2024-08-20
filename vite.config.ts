import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [],
  build: {
    outDir: "./dist",
    lib: {
      entry: [
        resolve(__dirname, "./src/mt-decode.ts"),
        resolve(__dirname, "./src/mt-decrypt.ts"),
      ],
    },
    target: "esnext",
    rollupOptions: {
      external: ["crypto"],
    },
  },
});
