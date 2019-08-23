import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import setYearFunction from '../modules/action';
import Author from '../components/Regist';
import api from '../../../services/api';

class RegistContainer extends Component {
	
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
				console.log('QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ', newUser );
			});
	}
	
	authLogIn = (event) => {
		event.preventDefault();
		
		this.setState({
			isRedirect: 'home'
		});
	}
	
	transPage = (event) => {
		event.preventDefault();
		
		this.setState({
			isRedirect: 'author'
		});
	}
	
	render() {
		if (this.state.isRedirect == 'home') {
			return <Redirect to='/home'/>
		}
		if (this.state.isRedirect == 'author') {
			return <Redirect to='/'/>
		}
		return (
			<Author authLogIn={this.authLogIn} transPage={this.transPage} />
		)
	}
}

export default RegistContainer;

// function mapStateToProps(state) {
// 	return {
// 		user: state.userInfo.user,
// 		year: state.userInfo.year,
// 	}
// }
//
// function mapDispatchToProps(dispatch) {
// 	return {
// 		setYearFunction: (year: number) => {
// 			dispatch(setYearAction(year))
// 		}
// 	}
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(AuthorPage);