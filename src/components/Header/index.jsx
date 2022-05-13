import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'

class Header extends Component {
	render() {
		return (
			<>
				<h2>Reach路由案例</h2>
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
			</>
		)
	}
}

export default withRouter(Header)

// withRouter的返回值是一个一般组件，让一般组件具备路由组件所特有的API
