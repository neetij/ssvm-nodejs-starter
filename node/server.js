const express = require('express')
const { solve, is_prime_simple, list_primes_in_range } = require('../pkg/ssvm_nodejs_starter_lib.js');

const app = express()
const port = 3000
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));

// A sample route
// app.get('/', (req, res) => res.send('Hello World!'))
app.get('/', (req, res) => res.redirect("/index.html"));

app.post('/solve', function (req, res) {
    var a = parseFloat(req.body.a);
    var b = parseFloat(req.body.b);
    var c = parseFloat(req.body.c);
    res.send(solve([a, b, c]))
  })
  app.post('/is_prime', function (req, res) {
    var num = parseFloat(req.body.num);
    res.send(is_prime_simple(num))
  })

// Start the Express server
app.listen(port, () => console.log(`Listening at http://localhost:${port}`))
