# Script loader example

This example demonstrates how to configure and how `script-loader` behaves.

## Run

To run install the `example` dependencies and run webpack with:

``` cli
npm i
npm start
```

Than open a browser and point it to: http://localhost:8080/assets/

You will notice an output from the two scripts now packed into `example/dist/index.js` bundle:

```
List of the script.exec.js fields :
this fields :
   	- this[postMessage] = function
   	- this[blur] = function
   	- this[focus] = function
   	- this[close] = function
    ....
arguments fields :
    Nothing to show here

List of the entry.js fields :
this fields :
	Nothing to show here
arguments fields :
	arguments[[object Object]] = object
	arguments[[object Object]] = object
```

Also note that code inside `script.exec.js` was executed without calling or using `exec` into the `entry.js`
