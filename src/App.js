import React, { Component } from 'react'

import { Link, Route } from 'react-router-dom'
/**
 * 路由组件  pages
 */
import Header from './components/Header'
import About from './pages/About'
/**
 * 一般组件  components
 */
import Home from './pages/Home'

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
							{/* 原生html中，靠<a></a>跳转不同页面 */}
							{/* <a className="list-group-item active" href="./about.html">
								About
							</a>
							<a className="list-group-item" href="./home.html">
								Home
							</a> */}

							{/* 在React中，靠路由链接实现组件切换--编写路由链接 */}
							<Link className="list-group-item active" to="/about">
								About
							</Link>
							<Link className="list-group-item" to="/home">
								Home
							</Link>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								<Route path="/about" component={About} />
								<Route path="/home" component={Home} />
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
