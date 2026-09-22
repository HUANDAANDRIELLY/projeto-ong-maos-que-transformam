import { defineConfig } from "vite";

export default defineConfig({
    base: "/projeto-ong-maos-que-transformam/",
    build: {
        rollupOptions: {
            input: "html/index.html"
        }
    }
});
