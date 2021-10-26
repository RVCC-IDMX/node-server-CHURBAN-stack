const http = require("http");

const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/plain");
  response.end("Hello-World");
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});

console.log(__filename);
console.log(__dirname); 


const {unlink} = require("fs");

unlink("hi.txt", "hello.txt", (err) => {
if (err) {
console.error(err);
return;
}
console.log("File renamed!"); 
});

import { addNums } from "./adddNums.js";

const sum = addNums(2,2);
console.log(sum);