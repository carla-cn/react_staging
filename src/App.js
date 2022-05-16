import React, { Component } from 'react'
import Count from './containers/Count'

export default class App extends Component {
	render() {
		return (
			<div>
				{/* 给容器组件传递store */}
				{/* <Count store={store} /> */}
				{/* 此处不传入store，在index.js中使用react-redux给所有需要store的容器传递stroe */}
				<Count />
			</div>
		)
	}
}
