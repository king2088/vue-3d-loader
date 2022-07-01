const path = require('path')
const { defineConfig } = require('@vue/cli-service')
const isProduction = process.env.NODE_ENV === 'production'
module.exports = defineConfig({
  transpileDependencies: true,
  pages:{
    index: {
      entry: isProduction ? './src/index.js' : './src/main.js',
    }
  },
  publicPath: isProduction ? '/dist' : '/',
  outputDir: './dist',
  chainWebpack: (config) => {
    if(isProduction) {
      config.output.filename('[name].js')
      config.output.libraryTarget('umd')
      config.output.umdNamedDefine(true)
    }
  }
})
