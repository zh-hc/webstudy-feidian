# 用户管理系统

## 写在前面

- 前端界面以`mrpanda`的管理系统为基础，结合QQ音乐的配色风格，对细节进行了少许修改

- 服务端以`黑马程序员-Node.js教程`中day4的源码为基础，将其与前端界面互通起来

## 思路

整体思路参考了`黑马程序员-Node.js教程`day4教程

### 起步

- 初始化
- 模板处理

### 路由设计

| 请求方法 | 请求路径 | get 参数 | post 参数             | 备注             |
| -------- | -------- | -------- | --------------------- | ---------------- |
| GET      | /        |          |                       | 渲染添加用户页面 |
| POST     | /        |          | username、account     | 处理添加用户请求 |
| GET      | /list    |          |                       | 渲染用户列表     |
| GET      | /edit    | ID       |                       | 渲染编辑页面     |
| POST     | /edit    |          | ID、username、account | 处理编辑请求     |
| GET      | /delete  | ID       |                       | 处理删除请求     |

## 测试方法

### 打开服务端

利用`cmd`/`powershell`定位到`server`文件夹下，输入命令行

```shell
node app.js
# 如果安装了nodemon，可以输入nodemon app.js
```

显示`running 3000...`即代表运行成功

### 打开页面

在浏览器输入`127.0.0.1:3000`即可进入登录页面进行相应操作

## 写在最后

### 收获

- 说实话，对于这个项目来讲，我收获最大的地方不在这个项目本身，而是一些细节上的东西

  - 当页面载入完毕后执行JavaScript代码：`<body onload="myFunction()">`
  - 在用户按下一个键盘按键时发生某事件：`<body onkeydown="myFunction()">`
  - 网页禁止复制：`<body onselectstart="return false">`
  - 返回值为真时，才会进行提交：`<form onsubmit="return myFunction()">`
  - 禁用input标签的自动填充功能：`<input autocomplete="off">`
  - 按钮被点击时，执行代码：`<button onclick="myFunction()">Click me</button>`
  - 固定表头：`tbody {overflow:auto;}`
  - 去掉number类型input框右侧的上下箭头：`input::-webkit-outer-spin-button,input::-webkit-inner-spin-button {-webkit-appearance: none !important;}`
  - 隐藏网页滚动条：`::-webkit-scrollbar{display: none;}`

- 时间很短暂，想要在短时间内做好一个项目，需要有强大的定力，至少我现在还做不到

- 很多东西都是直接套用的，甚至连套用在项目上都需要很久的时间打磨，所以代码仍然需要多敲多练

### 反思

- 对网页布局还存在很多没有解决的问题，需要继续学习
- 对于服务端的功能和代码，还没有完全明白，需要继续补充
- 这个管理系统更像是给管理员自己用的系统，与普通用户无关，因为整个页面操作每个录入信息的用户都可以看到并且进行操作。所以我感觉将我所提交的这个项目命名为`用户管理系统`而不是`signup`会更加合理一些

### 日志

注：`2020.8.9前的修改没有包括在内`

- 将登录界面地址改为127.0.0.1:3000(去掉之前存在的`/`后缀)`2020-8-9 21:36:39`
- 将服务端文件移入server文件夹中`2020-8-10 10:34:22`
- 将edit编辑界面更新为统一样式`2020-8-10 15:10:37`
- 在各个页面上添加跳转按钮，实现跳转`2020-8-10 15:46:38`
- 修改统一前端页面按钮上的文字`2020-8-10 15:51:50`
- 对代码的缩进统一改为4个空格`2020-8-10 17:59:16`