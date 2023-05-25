import path from 'path'
import { defineConfig } from 'vite';

export default defineConfig({
    resolve: {
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    },
    build: {
        target: 'esnext',
        rollupOptions: {
            input: {
                index: path.resolve(__dirname, 'index.html'),
                worker: path.resolve(__dirname, './src/pdf.worker.min.js')
            },
        }
    }
})