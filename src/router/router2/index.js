import React from 'react'
import { Router, Route, Switch, Link, Redirect } from 'react-router-dom'
import AsyncComponent from './AsyncComponent'
import browserHistory from 'src/util/history'

const Layout = AsyncComponent(() => import('src/pages/Layout/Layout'))
const StaffTab = AsyncComponent(() => import('src/pages/StaffTab/StaffTab'))
const Community = AsyncComponent(() => import('src/pages/Community/Community'))
const Register = AsyncComponent(() => import('src/pages/Register/Register'))

const getRouter = () => (
    <Router basename="/" history={browserHistory}>
        <Layout>
            <Switch>
                <Route exact path="/" component={StaffTab} />
                <Route path="/staff" component={StaffTab} />
                <Route path="/community" component={Community} />
                <Route path="/register" component={Register} />
                <Redirect to="/" />
            </Switch>
        </Layout>
    </Router>
)

export default getRouter
