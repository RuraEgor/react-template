import api from '../../services/api';

export class Auth {
	tokenRenewalTimeout;
	
	constructor(store, history) {
		this.store = store;
		this.history = history;
	}
	
	login = (email, password) => {
		
		this.setSession() //
		// редирект на основную страницу (/home , account e.t.c)
	};
	
	register = ({ email, password }) => {
	
	};
	
	isAuthenticated() {
		const access_token = localStorage.getItem('access_token');
		
		if (access_token) {
		
		} else {
			this.props.history.push("/login");
		}
		
		// Check whether the current time is past the
		// access token's expiry time
		let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
		return new Date().getTime() < expiresAt;
	}
	
	setSession = (authResult, isRenew) => {
		// Set the time that the access token will expire at
		let expiresAt = JSON.stringify(
			authResult.expiresIn * 1000 + new Date().getTime()
		);
		
		localStorage.setItem('access_token', authResult.accessToken);
		localStorage.setItem('refresh_token', authResult.refreshToken);
		localStorage.setItem('expires_at', expiresAt);
		
		// this.store.dispatch({ type: 'RENEW_SESSION_SUCCESS' });
		this.scheduleRenewal();
	};
	
	logout = () => {
		// Clear access token and ID token from local storage
		localStorage.removeItem('access_token');
		localStorage.removeItem('id_token');
		localStorage.removeItem('expires_at');
		clearTimeout(this.tokenRenewalTimeout);
	};
	
	// Обновление токена по Refresh Token
	renewToken = () => {
		
		let newUser = {
			email: 'ron7@gmial.com',
			password: 'parolparol123',
		}
		
		api.post('signin', newUser)
			.then(res => {
				console.log('xxxxxxxxxxxxxxxxx', res );
				this.setSession(res.data);
			});
		//логика по обновлению токена
		this.setSession(); //  если все успешно
	};
	
	scheduleRenewal = () => {
		const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
		const delay = expiresAt - Date.now();
		if (delay > 0) {
			this.tokenRenewalTimeout = setTimeout(() => {
				this.renewToken();
			}, delay);
		}
	};
}

export default Auth;
