import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUserInfo } from 'actions/userInfo'
import { compose } from 'recompose'
import { withSpin } from 'src/hoc'

class UserInfo extends Component {
	render() {
		const { userInfo, isLoading, errorMsg } = this.props.userInfo
		console.log(isLoading, 888888)
		console.log(userInfo, 99999)
		return (
			<div>
				{isLoading ? (
					'请求信息中......'
				) : errorMsg ? (
					errorMsg
				) : (
					<div>
						<p>用户信息：</p>
						<p>用户名：{JSON.stringify(userInfo)}</p>
					</div>
				)}
				<button onClick={() => this.props.getUserInfo()}>请求用户信息</button>
			</div>
		)
	}
}
import { from } from 'array-flatten'

export default compose(
	connect(
		state => ({ userInfo: state.userInfo }),
		{ getUserInfo }
	),
	withSpin(props => props.userInfo.isLoading)
)(UserInfo)
