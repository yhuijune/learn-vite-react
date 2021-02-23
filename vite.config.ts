import { defineConfig } from 'vite'
import { resolve } from "path"

// Provides React Refresh support for Vite.
import reactRefresh from '@vitejs/plugin-react-refresh'

// A vite plugin for import library component style automatic.
import vitePluginImp from "vite-plugin-imp"

// https://vitejs.dev/config/
export default defineConfig({
  // shared Options
  // tsconfig.json中的配置只是起提示作用，当真正在查找文件时，没有配置aslias，还是会报错
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "src") }],
  },
  // plugins: [reactRefresh()],
  // 以上的配置后，发现 antd 样式丢失
  // 方式1 ：import "antd/dist/antd.css"(全量引入样式文件,不推荐)
  // 方式2 ：如果用 webpack，我们可能会想到用 babel-plugin-import 来按需引入 antd 的样式文件，但用 vite，可以用 vite-plugin-imp 实现相同的效果。
  plugins: [
    reactRefresh(),
    vitePluginImp({
      libList: [
        {
          libName: "antd",
          // ?? name
          style: (name) => `antd/lib/${name}/style/index.css`,
        }
      ]
    })
  ],
  // Server Options
  server: {
    // port: 3000
    port: 8081
  }
  // Build Otpions
  // Dep Optization Options
  // SSR Options
}) 