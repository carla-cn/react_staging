## 一、向路由组件传递 params 参数

1. 路由链接(携带参数)：`<Link to="/home/message/detail/01/消息1">消息1</Link>`

2. 注册路由(声明接收)：`<Route path="/home/message/detail/:id/:title" component={Detail} />`

3. 接收参数：`const { params: { id, title }, } = this.props.match`
