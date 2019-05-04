/* eslint-disable react/prop-types */
import React, { useRef, useState } from 'react'
import { getAvatar, timeDiffBefore } from 'src/util'
import s from './PerComment.less'

const PerComment = props => {
    const {
        comment: { commenter, content, createdAt },
    } = props
    const { avatar, name } = commenter

    return (
        <div className="layoutRow startStart paddingBottom5 marginBottom5" style={{ borderBottom: '0.6px solid #ddd' }}>
            <img className={s.commentAvatar} src={getAvatar(avatar)} alt="" />
            <div className="flex1 layoutColumn startStart">
                <div className="fontSize12">
                    <span style={{ color: '#eb7350' }}>{name}</span>
                    <span style={{ lineHeight: '20px', color: '#333' }}>: {content}</span>
                </div>
                <div className="layoutRow startCenter" style={{ fontSize: '12px', color: '#808080', width: '100%' }}>
                    <div>{timeDiffBefore(new Date(), createdAt)}</div>
                    <div className="flex1 layoutRow endCenter">回复</div>
                </div>
            </div>
        </div>
    )
}

export default PerComment
