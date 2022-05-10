import React, { Component } from 'react'

export default class Header extends Component {
	render() {
		console.log('一般组件的props：', this.props)
		return <h2>Reach路由案例</h2>
	}
}
