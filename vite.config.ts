import vue from "@vitejs/plugin-vue2"
import path from "path"
import AutoImport from "unplugin-auto-import/vite"
import { defineConfig, loadEnv, createLogger } from "vite"
import Components from "unplugin-vue-components/vite"
import { ElementUiResolver } from "unplugin-vue-components/resolvers"
import VueMacros from "unplugin-vue-macros/vite"

export default defineConfig(({ mode, command }) => {
  return {
    resolve: {
      alias: [
        {
          find: "@",
          replacement: path.resolve(__dirname, "src")
        },
        {
          find: /^~/,
          replacement: ""
        }
      ]
    },
    plugins: [
      VueMacros({
        betterDefine: true,
        defineModel: {
          unified: false
        },
        plugins: {
          vue: vue({})
        }
      }),
      Components({
        resolvers: [
          ElementUiResolver({
            importStyle: false
          })
        ]
      }),
      AutoImport({
        imports: ["vue"],
        dirs: ["*/index.{js,ts,jsx,tsx}"]
      })
    ]
  }
})
