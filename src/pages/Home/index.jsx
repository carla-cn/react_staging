import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import MyNavLink from '../../components/MyNavLink'
import News from './News'
import Message from './Message'
import { Redirect } from 'react-router-dom'

export default class Home extends Component {
	render() {
		return (
			<>
				<h2>Home组件内容</h2>
				<div>
					<ul className="nav nav-tabs">
						<li>
							<MyNavLink to="/home/news">news</MyNavLink>
						</li>
						<li>
							<MyNavLink to="/home/message">Message</MyNavLink>
						</li>
					</ul>
					{/* 注册路由 */}
					<Switch>
						<Route path="/home/news" component={News} />
						<Route path="/home/message" component={Message} />
						<Redirect to="/home/news" />
					</Switch>
				</div>
			</>
		)
	}
}
