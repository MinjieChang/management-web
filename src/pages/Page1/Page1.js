import React, { Component } from 'react'
import image from './images/150x200.jpg'
import s from './Page1.css'

export default class Page1 extends Component {
	render() {
		return (
			<div className={s.page}>
				this is Page1558996666~
				<img src={image} />
			</div>
		)
	}
}
