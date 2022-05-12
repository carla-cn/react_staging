## 一、向路由组件传递 state 参数

1. 路由链接(携带参数)：`<Link to={{ pathname: '/home/message/detail', state: { id, title } }}>{title}</Link>`

2. 注册路由(无需声明，正常注册即可)：`<Route path="/home/message/detail" component={Detail} />`

3. 接收参数：`this.props.state`<br>
   备注：刷新也可以保留住参数
