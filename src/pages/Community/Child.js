/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { Button, Input } from 'antd'
import { connect } from 'react-redux'
import { getStaffs as actionGetStaffs } from 'src/redux/actions/staff'
import s from './Community.less'

const Talks = props => {
    useEffect(() => {
        props.getStaffs()
    }, [])
    return <div>child</div>
}

export default connect(
    null,
    dispatch => ({
        getStaffs() {
            return dispatch(actionGetStaffs())
        },
    }),
)(Talks)
