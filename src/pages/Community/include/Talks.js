/* eslint-disable react/prop-types */
import React from 'react'
import s from 'src/pages/Community/Community.less'

const Talks = props => {
    const { talks } = props
    return (
        <div>
            {!!talks.length && (
                <div className={s.container}>
                    <div className={s.header}>222</div>
                    <div className={s.content}>333</div>
                </div>
            )}
        </div>
    )
}

export default Talks
