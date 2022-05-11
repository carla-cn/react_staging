import React, { Component } from 'react'

import { Link, Switch, Route } from 'react-router-dom'

import Detail from './Detail'

export default class Message extends Component {
	state = {
		messages: [
			{
				id: '01',
				title: '消息1',
			},
			{
				id: '02',
				title: '消息2',
			},
			{
				id: '03',
				title: '消息3',
			},
		],
	}

	render() {
		const { messages } = this.state
		return (
			<div>
				<ul>
					{messages.map(({ id, title }) => (
						<li key={id}>
							{/* 向路由组件传递params参数 */}
							<Link to={`/home/message/detail/${id}/${title}`}>{title}</Link>&nbsp;&nbsp;
						</li>
					))}
				</ul>
				<hr />
				{/* 声明要接收的params变量 */}
				<Switch>
					<Route path="/home/message/detail/:id/:title" component={Detail} />
				</Switch>
			</div>
		)
	}
}
