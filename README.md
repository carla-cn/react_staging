# 一、求和精简版 redux 使用

1. store.js

   - 引入 redux 中的 createStore 函数，创建一个 store
   - createStore 调用时要传入一个为其服务的 reducer
   - 暴露 store 对象

2. countReducer.js

   - reducer 本质上是一个函数，接收：preState，action，返回加工后的状态
   - reducer 有两个作用：初始化状态，加工状态
   - reducer 被第一次调用时，是 store 自动触发的，传递的 preState 是 undefined

3. 在 index.js 中检测 store 中状态的改变，一旦发生改变重新渲染`<App />`<br />
   备注：redux 只负责管理状态，至于状态的改变驱动着页面的展示，需要自己写
