import React, { Component } from 'react'

export default class Detail extends Component {
	state = {
		contents: [
			{
				id: '01',
				content: '你好, dfhidhfgi',
			},
			{
				id: '02',
				content: '你好，非对话框的',
			},
			{
				id: '03',
				content: '你好，附近肯定会分开',
			},
		],
	}

	render() {
		console.log(this.props)
		const { contents } = this.state
		/* 接收 state 参数 */
		const { id, title } = this.props.location.state || {}
		const contentObj = contents.find(item => item.id === id) || {}
		return (
			<ul>
				<li>ID: {id}</li>
				<li>TITLE: {title} </li>
				<li>CONTNET: {contentObj.content}</li>
			</ul>
		)
	}
}
