import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class index extends Component {
	search = async () => {
		const {
			inputEl: { value: keyWord },
		} = this
		PubSub.publish('listState', { isFirstSearch: false, isLoading: true })

		/* fetch(`/api/search/users?q=${keyWord}`)
			.then(
				res => {
					console.log('联系服务器成功了', res)
					return res.json()
				},
				err => {
					console.log('联系服务器失败了', err)
					return new Promise(() => {})
				}
			)
			.then(
				res => console.log('获取数据成功了', res),
				err => console.log('获取数据失败了', err)
			) */

		/* fetch(`/api/search/users?q=${keyWord}`)
			.then(res => {
				console.log('联系服务器成功了', res)
				return res.json()
			})
			.then(res => console.log('获取数据成功了', res))
			.catch(err => console.log('出错了', err)) */

		try {
			const res = await fetch(`/api/search/users2?q=${keyWord}`)
			const data = await res.json()
			PubSub.publish('listState', { users: data.items, isLoading: false })
		} catch (err) {
			PubSub.publish('listState', { isLoading: false, err: err.message })
		}
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
