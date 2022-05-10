## 一、路由组件与一般组件

1. 写法不同<br>
   一般组件：`<Demo />`<br>
   路由组件：`<Route path="/demo" component={Demo} />`
2. 存放位置不同<br>
   一般组件：`components`<br>
   路由组件：`pages`
3. 接收到的 props 不同：
   一般组件：写组件标签时传递了什么就能接收到什么
   路由组件：接收到三个固定的属性
   ```javascript
   history: {
     go,
     goBack,
     goForward,
     push,
     replace
   }
   location: {
     pathname: '/about',
     search: '',
     state: undefined
   }
   match: {
     params: {},
     path: '/about',
     url: '/about',
   }
   ```
