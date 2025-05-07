import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss()],
  define: {
    "process.env": process.env,
  },
  server: {
    host: true,
    strictPort: true,
    port: Number(process.env.PORT) | 3010,
  },
});
