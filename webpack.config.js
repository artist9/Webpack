const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: "development",
	entry: {
		main: "./src/index.js"
	},
	output: {
		filename: "[name].[contenthash].js",
		path: path.resolve(__dirname, "dist")
	},
	devServer: {
		port: 9000,
		},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "src/index.html")
	}),
		new CleanWebpackPlugin()
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.less$/i,
				use: [
					// compiles Less to CSS
					"style-loader",
					"css-loader",
					"less-loader",
				],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					"style-loader",
					// Translates CSS into CommonJS
					"css-loader",
					// Compiles Sass to CSS
					"sass-loader",
				],
			},
			{
				test: /\.png/,
				type: 'asset/resource'
			},
			{
				test: /\.jpg/,
				type: 'asset/resource'
			},
		],
	},
}