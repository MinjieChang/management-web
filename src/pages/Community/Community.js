// redux 开发组件实际在开发类
import React, { useEffect } from 'react'
import { Button } from 'antd'
import { compose } from 'redux'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import { getTalks as actionGetTalks, namespace } from 'src/redux/actions/community'
import { AuthContext } from 'src/context'
import history from 'src/util/history'
import Talks from 'src/pages/Community/include/Talks'
import { withSpin } from 'src/hoc'

const Community = ({ match, getTalks, community: { talks } }) => {
    useEffect(() => {
        getTalks()
    }, [])

    const clickBtn = () => {
        history.push(`${match.url}/postTalk`)
    }

    return (
        <AuthContext.Consumer>
            {value => (
                <div>
                    <Button onClick={clickBtn}>发说说</Button>
                    <Talks account={value} talks={talks} />
                </div>
            )}
        </AuthContext.Consumer>
    )
}

Community.propTypes = {
    getTalks: propTypes.func.isRequired,
    community: propTypes.shape({ talks: propTypes.any }).isRequired,
}

const mapState = state => ({
    loading: state.loading,
    community: state.community,
})
const mapDispatch = dispatch => ({
    getTalks: () => dispatch(actionGetTalks()),
})

export default compose(
    connect(
        mapState,
        mapDispatch,
    ),
    withSpin(({ loading }) => loading[namespace]),
)(Community)
