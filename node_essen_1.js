const fs = require('fs');
const path = require('path');


// fs module provides an API for interacting with the file system in a manner closely modeled around standard POSIX functions.
fs.readFileSync(path.resolve(__dirname, 'data.txt'), 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
})


// writeFileSync 
fs.writeFileSync(path.resolve(__dirname, 'data.txt'), 'Hello World', 'utf-8', (err) => {
  if (err) throw err;
  console.log('File written successfully');
}
)

