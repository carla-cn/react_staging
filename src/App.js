import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
	getStudentsData = () => {
		axios.get('http://localhost:3000/api1/students').then(
			res => console.log('成功了', res),
			err => console.log('失败了', err)
		)
	}

	getCarsData = () => {
		axios.get('http://localhost:3000/api2/cars').then(
			res => console.log('成功拿到汽车', res),
			err => console.log('失败', err)
		)
	}

	render() {
		return (
			<div>
				<button onClick={this.getStudentsData}>顶我获取学生数据</button>
				<button onClick={this.getCarsData}>顶我获取汽车数据</button>
			</div>
		)
	}
}
