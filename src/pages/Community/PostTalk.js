/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { Button, Input } from 'antd'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Upload } from 'src/component'
import { submitTalks as actionSubmitTalks } from 'src/redux/actions/community'
import { getStaffs as actionGetStaffs } from 'src/redux/actions/staff'
import s from './Community.less'

const { TextArea } = Input

const Talks = props => {
    const [text, setText] = useState('')
    const [fileList, setFileList] = useState([])
    useEffect(() => {
        props.getStaffs()
    }, [])
    const postTalks = () => {
        const { submitTalks } = props
        const payload = {
            text,
            pathArr: fileList.map(file => file.response && file.response.data.picPath),
        }
        submitTalks(payload)
    }
    return (
        <div>
            <TextArea value={text} onChange={event => setText(event.target.value)} rows={3} className={s.textArea} />
            <Upload onChange={fils => setFileList(fils)} />
            <Button onClick={postTalks}>发表</Button>
            <Link to={`${props.match.url}/child`}>下级</Link>
        </div>
    )
}

export default connect(
    null,
    dispatch => ({
        getStaffs() {
            return dispatch(actionGetStaffs())
        },
        submitTalks(payload) {
            return dispatch(actionSubmitTalks(payload))
        },
    }),
)(Talks)
