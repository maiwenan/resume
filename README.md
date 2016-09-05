# Resume

一个基于 React 的简历生成器，可以提供自定义的简历模板和自定义的简历数据结构生成自己的简历。

## 如何创建自已的模板

* 在 `template` 模板文件夹中创建一个文件夹，如 `mytpl` ，这个文件夹的名称就是你的模板名称。
* 在 `mytpl` 中创建一个 `index.js` 的文件，该文件需要默认导出模板的根组件。
* 在 `data/resume.json` 中指定 `resumeTpl` 属性的值为 `mytpl` 这样就配置好了自己要使用的模板。

## 开发

```
// 下载依赖包
npm install
// 启动开发服务
npm start
```

## 生成在线模板

```
npm run build
```
