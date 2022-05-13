# 一、BrowserRouter 与 Hashrouter 的区别

1. 底层原理不一样：

   - BrowserRouter 使用的是 H5 的 history API,不兼容 IE9 及以下的版本
   - HashRouter 使用的是 URL 的哈希值

2. path 表现形式不一样

   - BrowserRouter 的路径中没有#，例如：`localhost:3000/demo/test`
   - HashRouter 的路径包含#，例如：`localhost:3000/#/demo/test`

3. 刷新后对路由 state 参数的影响

   - BrowserRouter 没有任何影响，因为 state 保存在 history 对象中
   - HashRouter 刷新后会导致路由的 state 参数丢失

4. 备注：HashRouter 可以用于解决一些路径错误相关的问题
