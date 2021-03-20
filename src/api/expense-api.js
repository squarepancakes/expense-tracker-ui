import ApiConfig from "./api-config.api";

export default {
	getAllExpenses() {
		const url = process.env.VUE_APP_SUBPATH;
		return ApiConfig()
			.get(url)
			.then((res) => res.data);
	},

	addNewExpense(item) {
		const url = process.env.VUE_APP_SUBPATH;
		return ApiConfig()
			.post(url, item)
			.then((res) => res.data);
	},
};
