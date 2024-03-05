// http module provides utilities for HTTP server and client functionality.
// properties of request object 
// 1. request.url 
// 2. request.method 
// 3. request.headers 
// 4. request.connection 
// 5. request.httpVersion

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
// const options = {
//   hostname: "www.google.com",
//   path: "/",
//   port: 443,
//   method: "GET"
// }

// const request = https.request(options, (response) => {
//   let body = '';
//   response.on('data', (chunk) => {
//     body += chunk;
//   })
//   response.on('end', () => {
//     fs.writeFileSync(path.resolve(__dirname, 'google.html'), body, 'utf-8', (err) => {
//       if (err) throw err;
//       console.log('File written successfully');
//     })
//   })
// })
// request.end();



// Serving HTML files from readable streams and piping to response 
const server = http.createServer((req,res)=>{
  const filePath = path.resolve(__dirname, 'google.html');
  const readStream = fs.createReadStream(filePath);
  console.log(req.url);

  readStream.on('error',(err)=>{
    res.writeHead(500, {'Content-Type': 'text/plain'});
    res.end('Internal Server Error');
  })
  res.writeHead(200, {'Content-Type': 'text/html'});
  readStream.pipe(res);
})

console.log(http.STATUS_CODES);


server.listen(3000,()=>{
  console.log("Server is listening on port 3000");
})