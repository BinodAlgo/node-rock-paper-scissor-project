// url module provides utilities for URL resolution and parsing. 
const url = require('url');

let urlString = 'http://example.com/path?name=value#hash';

// Parse a URL string into a URL object
let urlObject = url.parse(urlString, true);

console.log(urlObject);

// Format a URL object into a URL string
let backToString = url.format(urlObject);

console.log(backToString);

// Resolve a relative URL
let resolvedUrl = url.resolve('http://example.com/', '/one');
console.log(resolvedUrl);  // Outputs: 'http://example.com/one'