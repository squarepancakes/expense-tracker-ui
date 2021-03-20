import axios from "axios";

const headers = {
	Accept: "application/json",
	"Content-Type": "application/json",
};

export default (baseUrl = process.env.VUE_APP_BASE_URL) => {
	const instance = axios.create({
		baseUrl,
		headers,
	});
	return instance;
};
