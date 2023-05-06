import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // https://ja.vitejs.dev/guide/build.html#%E3%83%A9%E3%82%A4%E3%83%96%E3%83%A9%E3%83%AA%E3%83%A2%E3%83%BC%E3%83%89
  build: {
    lib: {
      // 複数のエントリーポイントのディクショナリや配列にもできます
      entry: resolve(__dirname, 'src/lib.js'),
      name: 'VueTakasqr',
      // 適切な拡張子が追加されます
      fileName: 'vue-takasqr'
    },
    rollupOptions: {
      // ライブラリにバンドルされるべきではない依存関係を
      // 外部化するようにします
      external: ['vue'],
      output: {
        // 外部化された依存関係のために UMD のビルドで使用する
        // グローバル変数を提供します
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [vue()],
})
