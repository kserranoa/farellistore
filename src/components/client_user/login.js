import React from 'react';

import '../../container/client_user/login.scss';

const login = () => {
	return(
		<body>
		<h1 className="h1">sign in with your email</h1>
		<div className="base-container">
		<div className="form">
		<label htmlFor="email">Email Address: </label>
		<input type="text" name="email" placeholder="enter your email"/>
		<label htmlFor="password">Password: </label>
		<input type="password" name="password" placeholder="enter your password"/>
		</div>
		</div>
		</body>
		);
}



export default login;