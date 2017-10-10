import exec from './script.exec.js';

// List variables
var buffer = 'List of the <code>entry.js</code> fields : \n';

buffer += '<em>this</em> fields : \n';
var hasFieldsInThis = false;
for (var name in this) {
    hasFieldsInThis = true;
    buffer += '\t- this[' + name + '] = ' + typeof this[name] + '\n';
}
if (!hasFieldsInThis) {
    buffer += '\t<em>Nothing to show here<\em>\n';
}

buffer += '<em>arguments</em> fields : \n';
if (typeof arguments !== 'undefined') {
    for (var x of arguments) {
        buffer += '\targuments[' + x + '] = ' + typeof x + '\n';
    }
} else {
    buffer += '\t<em>Nothing to show here<em>\n';
}


var pre =  document.createElement('pre');
pre.innerHTML = buffer;
document.body.appendChild(pre);