const path = require('path');

module.exports = {
	entry : "./app/main", 						//入口文件
	output: {
		path: path.resolve(__dirname, "dist"),  //出口文件的文件夹
    	filename: "all.js"						//出口文件的文件名
	},
	//配置webpack的插件
	module: {
    	rules: [
			{
				test: /\.jsx?$/,//所有以js文件结尾的文件
				include: [
					path.resolve(__dirname, "app")	//在app文件夹中寻找js结尾的
				],
				exclude: [
					path.resolve(__dirname, "node_modules")	//排除node_modules
				],
				loader: "babel-loader",
				options: {
	          		presets: ["es2015","react"]
	        	}
			}
    	]
	},
	watch : true,//检查代码更改
};
