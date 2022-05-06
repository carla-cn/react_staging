import React, { Component } from 'react'

import './index.css'

export default class Footer extends Component {
	handleCheckAll = e => {
		const { checkAllTodo } = this.props
		const { checked } = e.target
		checkAllTodo(checked)
	}

	render() {
		const { todos, clearTodoDone } = this.props

		const doneCount = todos.reduce((c, todoObj) => c + (todoObj.done ? 1 : 0), 0)
		const total = todos.length
		return (
			<div className="todo-footer">
				<label>
					<input
						type="checkbox"
						checked={doneCount === total && total !== 0}
						onChange={this.handleCheckAll}
					/>
				</label>
				<span>
					<span>已完成{doneCount}</span>/ 全部{total}
				</span>
				<button className="btn btn-danger" onClick={clearTodoDone}>
					清除已完成任务
				</button>
			</div>
		)
	}
}
