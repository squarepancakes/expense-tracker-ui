module.exports = {
	publicPath: "/",
	devServer: {
		proxy: {
			[`${process.env.VUE_APP_SUBPATH}/*`]: {
				target: process.env.VUE_APP_BASE_URL,
				secure: false,
				logLevel: "debug",
			},
		},
	},
};
