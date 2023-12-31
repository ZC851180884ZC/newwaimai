const { defineConfig } = require('@vue/cli-service')
const { VantResolver } = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');
module.exports = defineConfig({
  lintOnSave:false, //不检测
  transpileDependencies: true,
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [
            require("postcss-pxtorem")({
              // 把px单位换算成rem单位
              rootValue: 37.5, // vant官方使用的是37.5
              selectorBlackList: ["vant", "mu"], // 忽略转换正则匹配项
              propList: ["*"],
            }),
          ],
        },
      },
    },
  },
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
  },
})