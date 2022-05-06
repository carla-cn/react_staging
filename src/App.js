import React, { Component } from 'react'

import Footer from './components/Footer'
import Header from './components/Header'
import List from './components/List'

import './App.css'

export default class App extends Component {
	state = {
		todos: [
			{
				id: '001',
				name: '吃饭',
				done: true,
			},
			{
				id: '002',
				name: '睡觉',
				done: false,
			},
			{
				id: '003',
				name: '打代码',
				done: false,
			},
			{
				id: '004',
				name: '逛街',
				done: true,
			},
		],
	}

	/**
	 * 状态在哪里，操作状态的方法就在哪里
	 */

	addTodo = todoObj => {
		this.setState({ todos: [todoObj, ...this.state.todos] })
	}

	updateTodo = (id, doneState) => {
		const { todos } = this.state
		const newTodos = todos.map(todoObj => {
			if (todoObj.id === id) return { ...todoObj, done: doneState }
			return todoObj
		})
		this.setState({ todos: newTodos })
	}

	deleteDodo = id => {
		const { todos } = this.state
		this.setState({ todos: todos.filter(todoObj => todoObj.id !== id) })
	}

	checkAllTodo = done => {
		const { todos } = this.state
		this.setState({ todos: todos.map(todoObj => ({ ...todoObj, done })) })
	}

	clearTodoDone = () => {
		const { todos } = this.state
		this.setState({ todos: todos.filter(todoObj => !todoObj.done) })
	}

	render() {
		const { todos } = this.state
		const { addTodo, updateTodo, deleteDodo } = this
		return (
			<div className="todo-container">
				<Header addTodo={addTodo} />
				<List updateTodo={updateTodo} todos={todos} deleteDodo={deleteDodo} />
				<Footer todos={todos} checkAllTodo={this.checkAllTodo} clearTodoDone={this.clearTodoDone} />
			</div>
		)
	}
}
