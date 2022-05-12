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
							{/* 向路由组件传递 search 参数 */}
							<Link to={`/home/message/detail?id=${id}&title=${title}`}>{title}</Link>&nbsp;&nbsp;
						</li>
					))}
				</ul>
				<hr />
				{/* search 参数无需声明接收，正常注册路由即可 */}
				<Switch>
					<Route path="/home/message/detail" component={Detail} />
				</Switch>
			</div>
		)
	}
}
