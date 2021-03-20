import ApiConfig from "./api.config";

export default {
	getAllExpenses() {
		const url = process.env.VUE_APP_SUBPATH;
		return ApiConfig()
			.get(url)
			.then((res) => res.data);
	},
};
