# 一、求和 react-redux 的基本使用

明确两个概念

1. UI 组件：不能使用任何 redux 的 API，只负责页面的呈现、交互等

2. 容器组件：负责和 redux 通信，将结果给 UI 组件

如何创建一个容器组件——靠 react-redux 的 connect 函数

```js
connect(mapStateToProps, mapDispatchToProps)(UI组件)
// mapStateToProps: 映射状态，返回值是一个对象
// mapDispatchToProps: 映射操作状态的方法，返回值是一个对象
```

备注 1：容器组件中的 store 是靠 props 传进去的，而不是在容器组件直接引入<br>
备注 2：mapDispatchToProps 也可以是一个对象<br>
备注 3：index.js 使用 react-redux 后不需要再自己监测状态变化<br>
备注 4：index.js 使用 react-redux 中的 store 后可以只写一次就能实现给所有容器组件传递 store<br>
备注 5：容器组件和 UI 组件可以写在一个.jsx 的文件中
