# 一、求和 redux-react 开发者工具使用

1. `yarn add redux-devtools-extension`

2. store 中进行配置
   ```javascript
   import { composeWithDevTools } from 'redux-devtools-extension'
   export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))
   ```
