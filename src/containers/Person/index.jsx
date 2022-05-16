import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { addAPerson } from '../../redux/actions/person'

class Person extends Component {
	add = () => {
		const { addAPerson } = this.props
		const { name, age } = this
		const personObj = { id: nanoid(), name, age }
		addAPerson(personObj)
	}

	render() {
		const { count, persons } = this.props
		return (
			<div style={{ margin: 200, marginTop: 0 }}>
				<h2>Person组件，上方组件的和为：{count}</h2>
				<input type="text" onChange={e => (this.name = e.target.value)} placeholder="请输入名字" />
				&nbsp;&nbsp;
				<input type="text" onChange={e => (this.age = e.target.value)} placeholder="请输入年龄" />
				&nbsp;&nbsp;
				<button onClick={this.add}>添加</button>
				<ul>
					{persons.map(personObj => (
						<li key={personObj.id}>
							{personObj.name}--{personObj.age}
						</li>
					))}
				</ul>
			</div>
		)
	}
}

export default connect(state => ({ persons: state.persons, count: state.count }), {
	addAPerson,
})(Person)
