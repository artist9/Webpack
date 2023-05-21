const path = require("path");
module.exports = {
	mode: "development",
	entry: {
		main: "./src/index.js"
	},
	output: {
		filename: "bandl.js",
		path: path.resolve(__dirname, "dist")
	}
}