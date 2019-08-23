import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import setYearFunction from '../modules/action';
import axios from 'axios';
import Author from '../components/Author';
import api from '../../../services/api';

class AuthorContainer extends Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
			isRedirect: false
		};
		
		// let newUser = {
		// 	userName: '',
		// 	email: '',
		// 	password: '',
		// 	firstName: '',
		// 	lastName: ''
		// }
		
		/*
		{
			"userName": "AntonNew",
			"email": "ron7@gmial.com",
			"password": "parolparol123",
			"firstName": "Anton",
			"lastName": "Smith"
		}
		*/
		
		
		let newUser = {
			email: 'ron7@gmial.com',
			password: 'parolparol123',
		}
		
		api.post('signin', newUser)
			.then(res => {
				console.log('QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ', res );
			});
	}
	
	authLogIn = (event) => {
		event.preventDefault();
		
		let newUser = {
			email: 'ron7@gmial.com',
			password: 'parolparol123',
		}
		
		api.post('signin', newUser)
			.then(res => {
				console.log('TTTTTTTTTTTTTTTTTTTTTTTTTT', res );
				// Author.setSession(res.data);
				
				this.setState({
					isRedirect: 'home'
				});
			});
	}
	
	transPage = (event) => {
		event.preventDefault();
		
		this.setState({
			isRedirect: 'registration'
		});
	}
	
	render() {
		if (this.state.isRedirect == 'home') {
			return <Redirect to='/home'/>
		}
		if (this.state.isRedirect == 'registration') {
			return <Redirect to='/registration'/>
		}
		return (
			<Author authLogIn={this.authLogIn} {...this.props} transPage={this.transPage} />
		)
	}
}


function mapStateToProps(state) {
	return {
		user: state.author.user,
		year: state.author.year
	}
}

// function mapDispatchToProps(dispatch) {
// 	return {
// 		setYearFunction: (year) => {
// 			dispatch(setYearAction(year))
// 		}
// 	}
// }

export default connect(mapStateToProps)(AuthorContainer);