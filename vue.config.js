const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'examples-demo',
  productionSourceMap: false,
  css: { extract: false }
})
