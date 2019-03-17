import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
// import withSpin from '../../hoc/withSpin';
// import { getStaffs as actionGetStaffs } from '../../actions/staff';
import s from './StaffTab.less'

class StaffTab extends React.Component {
	componentDidMount() {
		const { getStaffs } = this.props
		// getStaffs();
	}
	render() {
		return (
			<div className={s.root}>
				<div>StaffTa6667777</div>
			</div>
		)
	}
}

export default compose(
	connect(
		state => ({
			state
		}),
		dispatch => ({
			getStaffs() {
				return dispatch(actionGetStaffs())
			}
		})
	)
	// withSpin(props => props.state.loading.loading),
)(StaffTab)
