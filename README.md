# vum
Vue UI Mobile(VUM) 

## Dependenies Install
- `npm i`
- `cd site/desktop` then `npm i`
- `cd site/kitchen` then `npm i`

## run 

`npm start` Then open your browser locahost:8001

## How start ?

- Working Directory
```
    --Components  // 工作区
    |----button  
    |-------demo  // demo
    |----------basic.md   // 不用管, 只要有就行
    |----------basic.vue  // .vue 文件的filename 跟同级的.md文件对应就行， 可以有多组对应， 如(basic.md,basic.vue,basic2.md,basic2.vue) 其中.md 文件是给底层读的，内容可以为空， 后期会去掉demo下的.md 文件,直接使用.vue文件, .vue文件是直接在8002 端口演示的
    |-------button.vue // 组件的实现
    |-------index.js  // 组件入口
    |-------index.en-US.md // 英文文档（先不管）
    |-------index.zh-CN.md // 中文文档先实现
```




