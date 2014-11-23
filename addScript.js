/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(src) {

	// Assume that we use a normal browsing mode
	if(typeof window !== "undefined") {
		if (window.execScript)
			window.execScript(src);
		else
			eval.call(null, src);
	}
	
	// Assume that we load a script in a web worker
	if(typeof self !== "undefined") {
		if (self.execScript)
			self.execScript(src);
		else
			eval.call(null, src);
	}
}