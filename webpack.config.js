"use strict";

module.exports = {
	mode: "production",
	optimization: {
		minimize: false,
		concatenateModules: false,
		usedExports: true
	},
	target: "web"
};
