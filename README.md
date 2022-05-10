## 一、路由-NavLink

1. 给路由链接加选中高亮的样式可以使用 NavLink<br>
   注意：如果被选中的样式名和高亮的样式名相同，则可以省略 activeClassName

   ```jsx
   <NavLink activeClassName="active" className="list-group-item" to="/about">
   	About
   </NavLink>
   ```
