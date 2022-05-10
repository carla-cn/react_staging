import React, { Component } from 'react'

import { Route, Switch } from 'react-router-dom'
/**
 * 路由组件  pages
 */
import About from './pages/About'
import Home from './pages/Home'
import Test from './pages/Test'
/**
 * 一般组件  components
 */
import Header from './components/Header'
import MyNavLink from './components/MyNavLink'

export default class App extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<div className="page-header">
							<Header />
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group">
							<MyNavLink className="list-group-item" to="/about">
								About
							</MyNavLink>
							<MyNavLink className="list-group-item" to="/home">
								Home
							</MyNavLink>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								<Switch>
									<Route path="/about" component={About} />
									<Route path="/home" component={Home} />
									<Route path="/home" component={Test} />
								</Switch>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
