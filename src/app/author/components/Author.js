import React from 'react';
import styles from '../styles/index.module.scss'

function Author(props) {
	
	const {
			authLogIn,
			transPage,
			user,
			addYear
	} = props;
	
	console.log("wwwwwwwwwwwwww", props );
	
	return (
		<div className="form__cont">
			{/*<div className={styles.error}>*/}
			<h2>{user}</h2>
			<form action="" className="g-form form_author" onSubmit={authLogIn}>
				<div className="form__field">
					<input type="email" className="g-input" placeholder="Email"/>
				</div>
				<div className="form__field">
					<input type="password" className="g-input" placeholder="Password"/>
				</div>
				<div className="form__field">
					<button className="g-btn g-btn_bl btn_author">Login</button>
				</div>
				<div className="link-form__cont">
					<a href="/" className="link_form" onClick={transPage}>Registration</a>
				</div>
				<h3 onClick={addYear}>click</h3>
			</form>
		</div>
	)
}

export default Author;