import React from 'react'
import ReactDOM from 'react-dom/client'

import store from './redux/store'

import { Provider } from 'react-redux'

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<Provider store={store}>
		<App />
	</Provider>
)

/* 使用了react-redux不用再自己监测 */
// 检测redux中状态的改变，如redux的状态发生了改变，那么重新渲染App组件
// store.subscribe(() => {
// 	root.render(<App />)
// })
