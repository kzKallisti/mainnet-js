// https://nuxt.com/docs/api/configuration/nuxt-config

import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
const EMPTY_PATH = require.resolve(
  'rollup-plugin-node-polyfills/polyfills/empty.js',
)

export default defineNuxtConfig({
  vite: {
    build: {
      target: 'esnext',
    },
    optimizeDeps: {
      esbuildOptions: {
        define: {global: 'globalThis'},
        target: 'esnext',
        plugins: [
          NodeGlobalsPolyfillPlugin({
              process: true,
              buffer: true,
          }),
        ]
      },
    },
    resolve: {
      alias: {
        bufferutil: EMPTY_PATH,
        child_process: EMPTY_PATH,
        crypto: EMPTY_PATH,
        dns: EMPTY_PATH,
        events: require.resolve("events/"),
        eventsource: EMPTY_PATH,
        fs: EMPTY_PATH,
        http: EMPTY_PATH,
        https: EMPTY_PATH,
        libpq: EMPTY_PATH,
        module: EMPTY_PATH,
        net: EMPTY_PATH,
        os: EMPTY_PATH,
        "parse-database-url": EMPTY_PATH,
        path: EMPTY_PATH,
        pg: EMPTY_PATH,
        "pg-format": EMPTY_PATH,
        "pg-native": EMPTY_PATH,
        solc: EMPTY_PATH,
        tls: EMPTY_PATH,
        url: EMPTY_PATH,
        zlib: EMPTY_PATH,

        stream: require.resolve('stream-browserify'),
      },
    },
  }
})
