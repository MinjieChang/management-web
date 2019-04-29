/* eslint-disable react/prop-types */
import React from 'react'
import { connect } from 'react-redux'
import { message } from 'antd'
import { Talk } from 'src/component'
import { deleteTalk as actionDeleteTalk } from 'src/redux/actions/community'
import s from 'src/pages/Community/Community.less'

const Talks = props => {
    const {
        talks,
        account: { _id: accountId, isVip },
        deleteTalk,
    } = props
    const handleDelete = (authorId, talkId, pathArr) => {
        if (isVip || authorId === accountId) return deleteTalk({ id: talkId, pathArr })
        return message.error('你无权限删除此微博！')
    }
    const handleCollect = id => {}
    const handleStar = id => {}
    const handleComment = id => {}
    const talkProps = { handleDelete, handleCollect, handleStar, handleComment }
    return (
        <div className="layoutColumn startCenter">
            {!!talks.length && talks.map(talk => <Talk {...talkProps} key={talk._id} talk={talk} />)}
            {!talks.length && <div style={{ color: '#ccc' }}>暂时还没有微博， 你可以尝试发布第一个...</div>}
        </div>
    )
}

const mapState = state => ({})
const mapProps = dispatch => ({
    deleteTalk: value => dispatch(actionDeleteTalk(value)),
})

export default connect(
    mapState,
    mapProps,
)(Talks)
