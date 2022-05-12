## 一、向路由组件传递 search 参数

1. 路由链接(携带参数)：`<Link to="/home/message/detail?id=01&title=消息1">消息1</Link>`

2. 注册路由(无需声明，正常注册即可)：`<Route path="/home/message/detail" component={Detail} />`

3. 接收参数：`const { search } = this.props.location`<br>
   备注：需要借助 URLSearchParams 解析，本例中用的 querystring , 但已不被推荐
