import React, { Component } from 'react'
import store from './redux/store'

import './App.css'

export default class App extends Component {
	getRes = type => {
		const data = this.selectedData || 1

		switch (type) {
			case 'increment':
				store.dispatch({ type: 'increment', data })
				break
			case 'decrement':
				store.dispatch({ type: 'decrement', data })
				break
			case 'incrementIfOdd':
				if (store.getState() % 2 !== 0) store.dispatch({ type: 'increment', data })
				break
			case 'incrementAsync':
				setTimeout(() => {
					store.dispatch({ type: 'increment', data })
				}, 500)
				break

			default:
				break
		}
	}

	/**
	 * 当 store 的状态改变时，刷新页面(执行render)，可以放在 index.js 中，就可以不用在每个需要sotre的组件中都写一遍
	 */
	// componentDidMount() {
	// 	store.subscribe(() => {
	// 		this.setState({})
	// 	})
	// }

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
