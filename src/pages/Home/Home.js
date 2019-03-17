import React, { Component } from 'react'

export default class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 0
		}
	}

	componentDidMount() {
		this.setState({ count: this.state.count + 1 })
		console.log(this.state.count, '1')

		this.setState({ count: this.state.count + 1 })
		console.log(this.state.count, '2')

		setTimeout(() => {
			this.setState({ count: this.state.count + 1 })
			console.log(this.state.count, '3')

			this.setState({ count: this.state.count + 1 })
			console.log(this.state.count, '4')
		}, 0)
	}

	_handleClick() {
		this.setState({
			count: ++this.state.count
		})
	}

	render() {
		console.log(this.state.count, 'render')
		return (
			<div>
				this is home558
				<br />
				当前计数：{this.state.count}
				<br />
				<button onClick={() => this._handleClick()}>自增======</button>
			</div>
		)
	}
}
