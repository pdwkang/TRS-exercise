import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import Users from './Users.js';
import Albums from './Albums';
import Images from './Images';
import SingleImage from './SingleImage';

ReactDOM.render(
  	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Users} />
			<Route path="user/:id" component={Albums} />
			<Route path="user/:id/album/:id" component={Images} />
			<Route path="album/:id/image/:id" component={SingleImage} />
		</Route>
	</Router>,
  document.getElementById('root')
);
