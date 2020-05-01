import React from 'react';

import { Switch, Route } from 'react-router-dom';

import login from './components/client_user/login';

const Router = () => {
	return(
		<Switch>
		<Route exact path = '/' component={login} />
		</Switch>
		);
}
export default Router; 