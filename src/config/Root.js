import React from 'react';
import {createBrowserHistory} from 'history';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {Redirect, Route, Router, Switch} from 'react-router-dom';
import AuthorContainer from '../app/author/containers/AuthorContainer';
import RegistContainer from '../app/registration/containers/RegistContainer';
import HomeContainer from '../app/home/containers/HomeContainer';
import {Auth} from '../services/auth';

import rootReducer from '../store/index';

const store = createStore(rootReducer);

const history = createBrowserHistory();

let isAuth = true;

const PrivateRoute = ({component: Component, ...rest}) => {
	return (
		<Route {...rest}
	render={props => {

			console.log("ffffffffff", props);

			// if (isAuth === true) {
			if (isAuth = true) {
				return <Component {...props} />;
			} else if (isAuth === false) {
				return <Redirect to="/"/>;
			}
			return <div />;
		}}
		/>);
};

const Root = ()=> {
	
	// Auth.login();
	
	return (
		<Provider store = {store}>
			<Router history = {history}>
				<Switch>
					<Route path = '/' exact component={AuthorContainer}/>
					<PrivateRoute  path='/home' component={HomeContainer} />
					<PrivateRoute  path='/registration' component={RegistContainer} />
				</Switch>
			</Router>
		</Provider>
	);
};

export default Root;


// isAuth = {this.props.isAuth}
// const mapStateToProps = state => {
// 	return {
// 		isAuth: authSelectors.getIsAuth(state),
// 	};
// };
