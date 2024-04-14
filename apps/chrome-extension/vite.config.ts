import { resolve } from 'path'
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
// import devtools from 'solid-devtools/vite';

// do not use vite to compile the content script?
// missing document?

export default defineConfig({
  plugins: [
    /* 
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
    // devtools(),
    solidPlugin(),
  ],
  server: {
    port: 3000,
  },
  //Multiple entry points are not supported when output formats include "umd" or "iife".
  build: {
    target: 'esnext',
    lib: {
      entry: {
          index: resolve(__dirname, 'index.html'),
           contentscript: resolve(__dirname, 'src/contentScript.ts')
      },
      formats: ['es']
    },
    rollupOptions: {

    //   // make sure to externalize deps that shouldn't be bundled
    //   // into your library
    //   external: ['vue'],
    //   output: {
    //     // Provide global variables to use in the UMD build
    //     // for externalized deps
    //     globals: {
    //       vue: 'Vue',
    //     },
    //   },
    // },
  },
}
})

