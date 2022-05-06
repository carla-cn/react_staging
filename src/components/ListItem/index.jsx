import React, { Component } from 'react'

import './index.css'

export default class ListItem extends Component {
	state = { mouse: false }

	handleMouse = flag => {
		return () => this.setState({ mouse: flag })
	}

	handleChange = id => {
		const { updateTodo } = this.props
		return e => updateTodo(id, e.target.checked)
	}

	handleDelete = id => {
		const { deleteDodo } = this.props
		if (window.confirm('确定删除吗？')) {
			deleteDodo(id)
		}
	}

	render() {
		const { id, name, done } = this.props
		const { mouse } = this.state
		return (
			<li
				style={{ backgroundColor: mouse ? '#ddd' : '#fff' }}
				onMouseEnter={this.handleMouse(true)}
				onMouseLeave={this.handleMouse(false)}
			>
				<label>
					<input type="checkbox" checked={done} onChange={this.handleChange(id)} />
					<span>{name}</span>
				</label>
				<button
					onClick={() => this.handleDelete(id)}
					className="btn btn-danger"
					style={{ display: mouse ? 'block' : 'none' }}
				>
					删除
				</button>
			</li>
		)
	}
}
