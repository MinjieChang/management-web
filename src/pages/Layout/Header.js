import React from 'react'
import { connect } from 'react-redux'
import s from './Layout.less'
import Menu from './Menu'

const Header = props => {
    const { auth } = props
    console.log(auth, 8888)
    return <div>Header888</div>
}

export default connect(
    state => ({
        auth: state.auth,
    }),
    null,
)(Header)
