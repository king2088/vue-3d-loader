# 介绍

vue-3d-loader是vueJS + threeJS整合的一个3d展示组件。

支持.dae/.fbx/.gltf/.glb/.obj/.ply/.stl/.json，并支持同一个场景导入多个不同3D模型，支持mtl材质以及jpg/png等图片纹理

[![Version](https://img.shields.io/npm/v/vue-3d-loader.svg)](https://www.npmjs.com/package/vue-3d-loader) [![License](https://img.shields.io/npm/l/vue-3d-loader.svg)](https://www.npmjs.com/package/vue-3d-loader) [![Downloads](https://img.shields.io/npm/dt/vue-3d-loader.svg)](https://www.npmjs.com/package/vue-3d-loader)

## 注意事项

*vue3请安装**2.0.0**及以上版本，vue2请安装**1.x.x**版本*

## 功能支持列表

- 加载单个3D模型
- 同时加载多个3D模型
- 同时加载多个不同类型3D模型
- 加载Draco压缩gltf模型(使用方法请查看API)
- 支持自定义文件类型（用于无文件后缀名url）
- 设置场景宽高
- 设置材质及纹理
- 交互控制
- 鼠标事件
- 灯光
- 相机位置及旋转
- 添加标注点
