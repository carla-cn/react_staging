# 一、求和 redux 数据共享

明确两个概念

1. 定义一个 Person 组件，和 Count 组件通过 redux 共享数据
2. 为 Person 组件编写：reducer/action，配置 constant 常量
3. 重点：Person 的 reducer 和 Count 的 reducer 要使用 combineReducers 进行合并，合并后的总状态值一个`对象`
