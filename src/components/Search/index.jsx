import React, { Component } from 'react'
import axios from 'axios'

export default class index extends Component {
	search = () => {
		const {
			inputEl: { value: keyWord },
			props: { updateState },
		} = this
		updateState({ isFirstSearch: false, isLoading: true })
		// 以自己的域名发请求可以省略域名
		axios.get(`/api/search/users?q=${keyWord}`).then(
			res => updateState({ users: res.data.items, isLoading: false }),
			err => updateState({ isLoading: false, err: err.message })
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
