const CracoLessPlugin = require('craco-less')
const aliyunTheme = require('@ant-design/aliyun-theme')
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              ...aliyunTheme,
              '@primary-color': '#f7b55f',
              '@link-color': '#f7b55f',
              '@link-active-color': '#f7b55f',
              '@link-hover-color': '#f7b55f',
              '@link-focus-outline': '#f7b55f',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
