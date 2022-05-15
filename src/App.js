import React, { Component } from 'react'
// 引入store,获取redux中的state
import store from './redux/store'
// 引入actionCreator，专门用于创建action对象
import { createDecrementAction, createIncrementAction } from './redux/countAction'

import './App.css'

export default class App extends Component {
	getRes = type => {
		const data = this.selectedData || 1

		switch (type) {
			case 'increment':
				store.dispatch(createIncrementAction(data))
				break
			case 'decrement':
				store.dispatch(createDecrementAction(data))
				break
			case 'incrementIfOdd':
				if (store.getState() % 2 !== 0) store.dispatch(createIncrementAction(data))
				break
			case 'incrementAsync':
				setTimeout(() => {
					store.dispatch(createIncrementAction(data))
				}, 500)
				break

			default:
				break
		}
	}

	render() {
		return (
			<div style={{ margin: 200 }}>
				<h3>求和的结果为：{store.getState()}</h3>
				<select onChange={e => (this.selectedData = Number(e.target.value))}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>{' '}
				&nbsp;
				<button onClick={() => this.getRes('increment')}>+</button> &nbsp;
				<button onClick={() => this.getRes('decrement')}>-</button> &nbsp;
				<button onClick={() => this.getRes('incrementIfOdd')}>状态为奇数时+</button> &nbsp;
				<button onClick={() => this.getRes('incrementAsync')}>异步+</button>
			</div>
		)
	}
}
