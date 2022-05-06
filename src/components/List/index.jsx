import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ListItem from '../ListItem'

import './index.css'

export default class List extends Component {
	static propTypes = {
		todos: PropTypes.array.isRequired,
		updateTodo: PropTypes.func.isRequired,
		deleteDodo: PropTypes.func.isRequired,
	}

	render() {
		const { todos, updateTodo, deleteDodo } = this.props
		return (
			<ul className="todo-main">
				{todos.map(todo => (
					<ListItem updateTodo={updateTodo} {...todo} key={todo.id} deleteDodo={deleteDodo} />
				))}
			</ul>
		)
	}
}
