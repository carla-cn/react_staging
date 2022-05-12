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
							{/* 开启replace模式，默认的是push模式 */}
							<Link replace to={{ pathname: '/home/message/detail', state: { id, title } }}>
								{title}
							</Link>
							&nbsp;&nbsp;
						</li>
					))}
				</ul>
				<hr />
				<Switch>
					<Route path="/home/message/detail" component={Detail} />
				</Switch>
			</div>
		)
	}
}
