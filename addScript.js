/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(src) {
	if (window.execScript)
		execScript(src);
	else
		eval.call(null, src);
}
