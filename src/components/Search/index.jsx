import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class index extends Component {
	search = () => {
		const {
			inputEl: { value: keyWord },
		} = this
		PubSub.publish('listState', { isFirstSearch: false, isLoading: true })
		axios.get(`/api/search/users?q=${keyWord}`).then(
			res => PubSub.publish('listState', { users: res.data.items, isLoading: false }),
			err => PubSub.publish('listState', { isLoading: false, err: err.message })
		)
	}

	render() {
		return (
			<section className="jumbotron">
				<h3 className="jumbotron-heading">搜索github用户</h3>
				<div>
					<input ref={c => (this.inputEl = c)} type="text" placeholder="输入关键词点击搜索" />
					&nbsp;<button onClick={this.search}>搜索</button>
				</div>
			</section>
		)
	}
}
