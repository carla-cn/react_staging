import { ADD_PERSON } from '../constant'

const initState = [{ id: '001', name: 'tom', age: 18 }]

export default function personReducer(preState = initState, action) {
	const { data, type } = action
	switch (type) {
		case ADD_PERSON:
			// preState.push(data)  // 不能这样写，会导致personReducer不是纯函数，preState前后浅对比相同，导致渲染不更新
			return [data, ...preState]
		default:
			return preState
	}
}
