import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'
import AsyncComponent from './AsyncComponent'
// import browserHistory from 'src/util/history'

const Home = AsyncComponent(() => import(/* webpackChunkName: "Home" */ 'src/pages/Home/Home'))
const Page1 = AsyncComponent(() => import(/* webpackChunkName: "Page1" */ 'src/pages/Page1/Page1'))
const Counter = AsyncComponent(() =>
	import(/* webpackChunkName: "Counter" */ 'src/pages/Counter/Counter')
)
const UserInfo = AsyncComponent(() =>
	import(/* webpackChunkName: "UserInfo" */ 'src/pages/UserInfo/UserInfo')
)

const getRouter = () => (
	<Router>
		<div>
			<ul>
				<li>
					<Link to="/">首页888</Link>
				</li>
				<li>
					<Link to="/page1">Page</Link>
				</li>
				<li>
					<Link to="/counter">counter</Link>
				</li>
				<li>
					<Link to="/userInfo">userInfo</Link>
				</li>
			</ul>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/page1" component={Page1} />
				<Route path="/counter" component={Counter} />
				<Route path="/userInfo" component={UserInfo} />
			</Switch>
		</div>
	</Router>
)

export default getRouter
