import axios from 'axios';

const client = axios.create({
	//all axios can be used, shown in axios documentation
	baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3002/api',
	responseType: 'json',
});

function getToken() {
	return `${localStorage.getItem('access_token') || null}`;
}

function Api() {
	
	this.get = async (url, params) => {
		const config = {
			url,
			params: params || {},
			headers: {
				Authorization: getToken(),
			},
			mode: 'cors',
		};
		return client.request(config);
	};
	
	this.post = async (url, data) => {
		
		return client.request({
			method: 'post',
			url,
			data,
			headers: {
				'Content-Type': 'application/json',
				Authorization: getToken(),
			},
			mode: 'cors',
		});
	};
	
	this.delete = async (url, params) => {
		return client.request({
			method: 'delete',
			url,
			params,
			headers: {
				'Content-Type': 'application/json',
				Authorization: getToken(),
			},
			mode: 'cors',
		});
	};
	this.put = async (url, data) => {
		return client.request({
			method: 'put',
			url,
			data,
			headers: {
				'Content-Type': 'application/json',
				Authorization: getToken(),
			},
			mode: 'cors',
		});
	};
	
	this.upload = async (url, file, progress) => {
		return client.request({
			method: 'put',
			url,
			data: file,
			onUploadProgress: function(progressEvent) {
				let percentCompleted = Math.round(
					(progressEvent.loaded * 100) / progressEvent.total
				);
				progress(percentCompleted);
			},
			headers: { 'Content-type': file.type },
			mode: 'cors',
		});
	};
}

const api = new Api();

export default api;