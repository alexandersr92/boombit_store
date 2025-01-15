import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

let UrlArray

if (process.platform === 'win32') {
  UrlArray = __dirname.split('\\')
} else {
  UrlArray = __dirname.split('/')
}
const finalPath = UrlArray.slice(Math.max(UrlArray.length - 3, 0)).join('/')
console.log('finalPath', finalPath)
// eslint-disable-next-line no-unused-vars
export default defineConfig(({ command, mode }) => {
  if (mode === 'production') {
    const buildConfig = {
      base: `/${finalPath}/dist/`,
      resolve: {
        alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
      },
      build: {
        brotliSize: false,
        watch: {},
        sourcemap: true,
        target: 'modules',
        rollupOptions: {
          input: {
            main: path.resolve(__dirname, 'src/main.js'),
          },
        },
        manifest: true,
      },
      plugins: [
        react(),
      ],
    }
    return buildConfig
  }
  if (mode === 'development') {
    const devConfig = {
      base: `/${finalPath}/`,
      resolve: {
        alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
      },
      build: {
        brotliSize: false,
        watch: {},
        target: 'modules',
        rollupOptions: {
          input: {
            main: path.resolve(__dirname, 'src/main.js'),
          },
        },
      },
      server: {
        port: 5173,
      },
      plugins: [
        react(),
      ],
    }
    return devConfig
  }
})