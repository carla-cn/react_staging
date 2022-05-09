## 一、路由的基本使用

1. 明确好界面中的导航区、展示区
2. 导航区的 a 标签改为 Link<br/>
   `<Link to="/xxxx">demo</Link>`
3. 展示区写 Route 标签进行路径的匹配<br/>
   `<Route path="/xxxx" component={Demo} />`
4. App 的最外层包裹一个 BrowserRouter 或 HashRouter
