import { connect } from 'react-redux'

import {
	createIncrementAction,
	createDecrementAction,
	createIncrementAsyncAction,
} from '../../redux/actions/count.js'

import React, { Component } from 'react'

class Count extends Component {
	getRes = type => {
		const data = this.selectedData || 1
		const { increment, decrement, incrementAsync, count } = this.props
		switch (type) {
			case 'increment':
				increment(data)
				break
			case 'decrement':
				decrement(data)
				break
			case 'incrementIfOdd':
				if (count % 2 !== 0) increment(data)
				break
			case 'incrementAsync':
				incrementAsync(data, 500)
				break

			default:
				break
		}
	}

	render() {
		const { count, personNum } = this.props
		return (
			<div style={{ margin: 200, marginBottom: 0 }}>
				<h2>Count组件，下方组件的人数为{personNum}</h2>
				<h4>求和的结果为：{count}</h4>
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

export default connect(state => ({ count: state.count, personNum: state.persons.length }), {
	increment: createIncrementAction,
	decrement: createDecrementAction,
	incrementAsync: createIncrementAsyncAction,
})(Count)
