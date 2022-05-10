## 一、Redirect 的使用

1. 一般写在所有路由的最下方，当所有路由都无法匹配时，跳转到 Redirect 指定的路由

2. 具体编码<br>

   ```jsx
   <Switch>
   	<Route path="/about" component={About} />
   	<Route path="/home" component={Home} />
   	<Redirect to="/home" />
   </Switch>
   ```
