import React, { Component } from 'react'

import List from './components/List'
import Search from './components/Search'

export default class App extends Component {
	state = { users: [], isFirstSearch: true, isLoading: false, err: '' }

	updateState = stateObj => this.setState(stateObj)

	render() {
		return (
			<div className="container">
				<Search updateState={this.updateState} />
				<List {...this.state} />
			</div>
		)
	}
}
