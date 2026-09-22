import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: "html/index.html"
        }
    }
});