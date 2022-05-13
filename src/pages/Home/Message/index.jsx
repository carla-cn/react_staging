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
							<Link to={{ pathname: '/home/message/detail', state: { id, title } }}>{title}</Link>
							&nbsp;&nbsp;
							<button
								onClick={() => this.props.history.replace('/home/message/detail', { id, title })}
							>
								replace跳转
							</button>{' '}
							&nbsp;
							<button
								onClick={() => this.props.history.push('/home/message/detail', { id, title })}
							>
								push跳转
							</button>
						</li>
					))}
				</ul>
				<hr />
				<Switch>
					<Route path="/home/message/detail" component={Detail} />
				</Switch>
				<button onClick={() => this.props.history.goBack()}>goBack</button> &nbsp;
				<button onClick={() => this.props.history.goForward()}>goForward</button> &nbsp;
				<button
					onClick={() => {
						// 前进两步
						this.props.history.go(2)
						// 后退两步
						this.props.history.go(-2)
					}}
				>
					go
				</button>
			</div>
		)
	}
}
