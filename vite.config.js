import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("/node_modules/@firebase/firestore/")) {
            return "firebase-firestore";
          }

          if (
            id.includes("/node_modules/@firebase/") ||
            id.includes("/node_modules/firebase/")
          ) {
            return "firebase";
          }
        },
      },
    },
  },
})
