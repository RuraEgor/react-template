import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Home from '../components/Home'
import '../styles/index.scss';

class HomeContainer extends Component {
	
	constructor(props){
		super(props);
		
		this.state ={
			isRedirect: false
		};
	}
	
	authLogOut = (event) => {
		event.preventDefault();
		this.setState({
			isRedirect: true
		});
	}
	
	render() {
		if(this.state.isRedirect===true){
			return <Redirect to='/' />
		}
		return(
			<Home authLogOut={this.authLogOut} />
		)
		
	}
}

export default HomeContainer;