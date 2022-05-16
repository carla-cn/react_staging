// 引入CountUI组件
import CountUI from '../../components/Count'

// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'

import {
	createIncrementAction,
	createDecrementAction,
	createIncrementAsyncAction,
} from '../../redux/countAction.js'

/**
 * 1. mapStateToProps函数返回的是一个对象：
 * 2. 返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value
 * 3. mapStateToProps用于传递状态
 */
const mapStateToProps = state => ({ count: state })

/**
 * 1. mapDispatchToProps函数返回的是一个对象：
 * 2. 返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value
 * 3. mapDispatchToProps用于传递操作状态的方法
 */
// const mapDispatchToProps = dispatch => ({
// 	increment: data => dispatch(createIncrementAction(data)),
// 	decrement: data => dispatch(createDecrementAction(data)),
// 	incrementAsync: (data, time) => dispatch(createIncrementAsyncAction(data, time)),
// })

/* mapDispatchToProps的简写 */
const mapDispatchToProps = {
	increment: createIncrementAction,
	decrement: createDecrementAction,
	incrementAsync: createIncrementAsyncAction,
}

// 使用connet()()创建并暴露一个Count的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
