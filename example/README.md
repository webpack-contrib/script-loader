#Script loader Example

This example demonstrates how to configure and how the script-loader behaves.

## Run

To run the example clone this repo and navigate to the `example` directory, than install the `example` dependencies and run webpack with

``` cli
npm i
npm start
```

Than open a browser to http://localhost:8080/assets/

You will notice an output from the two scripts now packed in the `example/dist/index.js` bundle:

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

Also the code inside `script.exec.js` was executed without calling or using exec into the `entry.js`

