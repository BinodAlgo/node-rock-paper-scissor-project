// querystring module provides utilities for parsing and formatting URL query strings.const querystring = require('querystring');
const querystring = require('querystring');
let str = 'name=value&name2=value2';

// Parse a query string into an object
let obj = querystring.parse(str);

console.log(obj);  // Outputs: { name: 'value', name2: 'value2' }

// Stringify an object into a query string
let backToString = querystring.stringify(obj);

console.log(backToString);  // Outputs: 'name=value&name2=value2'