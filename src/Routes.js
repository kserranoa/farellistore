import React from 'react';
import { Switch, Route } from 'react-router-dom';
import login from './components/client_user/login';
import paymethod from './components/buys/paymethod';
import pendbuys from './components/buys/pendbuys';
import shoppingcart from './components/buys/shoppingcart';
import profile from './components/client_user/profile';
import dashboard from './components/main/dashboard';
import index from './components/main/index';
import modproducts from './components/products/modproducts';
import catalogue from './components/products/catalogue';
import processbuys from './components/buys/processbuys';
import signup from './components/client_user/signup';

const Router = () => {
	return(
		<Switch>
		<Route exact path = '/' component={index}/>
		<Route path = '/login' component={login} />
		<Route path = '/paymethod' component={paymethod} />
		<Route path = '/pendbuys' component={pendbuys} />
		<Route path = '/shoppingcart' component={shoppingcart}/>
		<Route path = '/profile' component={profile} />
		<Route path = '/dashboard' component={dashboard}/>
		<Route path = '/modproducts' component={modproducts}/>
		<Route path = '/catalogue' component={catalogue}/>
		<Route path = '/processbuys' component={processbuys}/>
		<Route path = '/signup' component={signup}/>
		</Switch>
		);
}

export default Router; 