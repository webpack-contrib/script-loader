/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var path = require("path");
var loaderUtils = require("loader-utils");
module.exports = function(content) {
	this.cacheable && this.cacheable();
	this.clearDependencies && this.clearDependencies();
	var rawJs = loaderUtils.getRemainingRequest(this);
	return "require(" + JSON.stringify(path.join(__dirname, "addScript" + (this.web ? ".web" : "") + ".js")) + ")"+
			"(require(" +
			JSON.stringify("raw" + rawJs) + "))";
}
module.exports.seperable = true;