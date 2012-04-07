/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var path = require("path");
module.exports = function(content) {
	var loaderSign = this.request.indexOf("!");
	var rawJs = this.request.substr(loaderSign); // including leading "!"
	if(this.web)
		return "require(" + JSON.stringify(path.join(__dirname, "addScript")) + ")"+
				"(require(" +
					JSON.stringify("raw" + rawJs) + "))";
	return "";
}