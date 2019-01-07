# react-component-boilerplate
用于创建方便测试、可在npm上发布的react组件

## TODO
- [x] 配置开发环境
- [x] 配置生产环境
- [x] 支持png/svg等图片引入
- [ ] 删除冗余依赖
- [ ] 配置typescript
- [ ] 配置测试环境
- [ ] 重写readme
- [ ] 发布


## 使用方法
1. 根据自己要发布的组件信息修改`package.json` 中的以下字段
    name/version/description/keywords/author
2. 在src下编辑你的组件
    - __test__用于存放测试文件
    - assets 用于存放图片/字体等资源文件
    - styles 用于存放样式文件，支持less
    - index.js 组件的入口
3. 运行`npm run dev`对组件进行预览
4. 运行`npm run build`对组件进行打包，打包结果在dist目录
5. 运行`npm publish`发布你的组件

