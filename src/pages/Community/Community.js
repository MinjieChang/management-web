// redux 开发组件实际在开发类
import React, { useEffect } from 'react'
import { Button } from 'antd'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import { getTalks as actionGetTalks } from 'src/redux/actions/community'
import history from 'src/util/history'
import Talks from 'src/pages/Community/include/Talks'

const ShuoShuo = ({ match, getTalks, community: { talks } }) => {
    useEffect(() => {
        getTalks()
    }, [])

    const clickBtn = () => {
        history.push(`${match.url}/postTalk`)
    }

    return (
        <div>
            <Button onClick={clickBtn}>发说说</Button>
            <Talks talks={talks} />
        </div>
    )
}

ShuoShuo.propTypes = {
    getTalks: propTypes.func.isRequired,
    community: propTypes.shape({ talks: propTypes.any }).isRequired,
}

const mapState = state => ({
    community: state.community,
})
const mapDispatch = dispatch => ({
    getTalks: () => dispatch(actionGetTalks()),
})

export default connect(
    mapState,
    mapDispatch,
)(ShuoShuo)
