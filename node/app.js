/*const { say, circumference } = require('../pkg/ssvm_nodejs_starter_lib.js');

const http = require('http');
const url = require('url');
const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url,true).query;
  if (!queryObject['name']) {
    res.end(`Please use command curl http://${hostname}:${port}/?name=MyName \n`);
  } else {
    x = 10;
    console.log(circumference(JSON.stringify(x)));
    // res.end(say(queryObject['name']) + '\n');
    res.end('circumference:' + circumference(JSON.stringify(x)) + '\n');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/
console.log('app.js');