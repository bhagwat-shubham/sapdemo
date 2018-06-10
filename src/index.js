import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Redirect, Route, Switch } from 'react-router';
import { Router } from 'react-router-dom';
// createBrowserHistory comes from react-router
import createBrowserHistory from 'history/createBrowserHistory';
import Login from './features/Login';
import Home from './features/Home';
const customHistory = createBrowserHistory();

const Root = () => {
	return (
		<Router history={customHistory}>
			<Switch>
				<Route exact={true} path="/login" component={Login} />
				<Route exact={true} path="/app/home" component={Home} />
				<Redirect from="/" to="/login" />
			</Switch>
		</Router>	
	)
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
