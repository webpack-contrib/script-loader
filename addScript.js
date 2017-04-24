/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var firstScript;

function inlineScript(src) {
	var script = document.createElement('script');
	script.innerHTML = src;
	firstScript = firstScript || document.getElementsByTagName('script')[0];
	firstScript.parentNode.insertBefore(script, firstScript);
}

module.exports = function(src) {
	if (typeof document !== 'undefined')
		inlineScript(src);
	else if (typeof execScript !== "undefined")
		execScript(src);
	else
		eval.call(null, src);
}
