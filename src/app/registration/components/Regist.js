import React from 'react';
import styles from '../styles/index.scss';

function Regist(props) {
	
	const authLogIn = props.authLogIn
	const transPage = props.transPage
	
	return (
		<div className="form__cont">
			<form action="" className="g-form form_author" onSubmit={authLogIn}>
				<div className="form__field">
					<input type="text" className="g-input" placeholder="Name"/>
				</div>
				<div className="form__field">
					<input type="email" className="g-input" placeholder="Email"/>
				</div>
				<div className="form__field">
					<input type="text" className="g-input" placeholder="First Name"/>
				</div>
				<div className="form__field">
					<input type="text" className="g-input" placeholder="Last Name"/>
				</div>
				<div className="form__field">
					<input type="password" className="g-input" placeholder="Password"/>
				</div>
				<div className="form__field">
					<button className="g-btn g-btn_bl btn_author">Registration</button>
				</div>
				<div className="link-form__cont">
					<a href="/" className="link_form" onClick={transPage}>Login</a>
				</div>
			</form>
		</div>
	)
}

export default Regist;