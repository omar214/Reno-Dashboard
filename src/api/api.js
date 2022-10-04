import axios from 'axios';
const baseURL = process.env.REACT_APP_API_URL;

const API = axios.create({
	baseURL,
	headers: {
		'Content-Type': 'application/json',
	},
});

export default API;
