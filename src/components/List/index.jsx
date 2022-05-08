import React, { Component } from 'react'

// 实现 发布订阅模式 的一个库
import PubSub from 'pubsub-js'

import './index.css'

export default class index extends Component {
	state = { users: [], isFirstSearch: true, isLoading: false, err: '' }

	componentDidMount() {
		this.token = PubSub.subscribe('listState', (_, stateObj) => this.setState(stateObj))
	}

	componentWillUnmount() {
		PubSub.unsubscribe(this.token)
	}

	render() {
		const { users = [], isFirstSearch, isLoading, err } = this.state
		return (
			<div className="row">
				{isFirstSearch ? (
					<h2>欢迎使用，输入关键字，随后点击搜索</h2>
				) : isLoading ? (
					<h2>Loading...</h2>
				) : err ? (
					<h2 style={{ color: 'red' }}>{err}</h2>
				) : (
					(users || []).map(userObj => (
						<div className="card" key={userObj.id}>
							<a href={userObj.html_url} target="_blank" rel="noreferrer">
								<img alt="avatar" src={userObj.avatar_url} style={{ width: 100 }} />
							</a>
							<p className="card-text">{userObj.login}</p>
						</div>
					))
				)}
			</div>
		)
	}
}
