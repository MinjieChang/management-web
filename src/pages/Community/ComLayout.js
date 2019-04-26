import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Community from 'src/pages/Community/Community'
import PostTalk from 'src/pages/Community/PostTalk'
import Child from './Child'

const CommunityLayout = ({ match }) => {
    return (
        <Switch>
            <Route exact path={match.url} component={Community} />
            <Route exact path={`${match.url}/postTalk`} component={PostTalk} />
            <Route exact path={`${match.url}/postTalk/child`} component={Child} />
            <Redirect to={match.url} />
        </Switch>
    )
}

export default CommunityLayout
