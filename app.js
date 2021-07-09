// const names = require("./4-names");
// const sayHi = require("./5-utils");
// const data = require("./6-alternate-export");

// console.log(data);
// console.log(names);

// sayHi("Sanjana");
// sayHi(names.rohan);
// sayHi(names.rahul);

const http = require("http");

const server = http.createServer((req, res)=> {
    if (req.url === '/') {
        res.end("Welcome to the home page");
    }
    if (req.url === '/about') {
        res.end("Welcome to the about us page");
    }
    res.end(`
        <h1>Oops!</h1>
        <p>Cannot find the page you were looking for</p>
        <a href="/">Home Page</a>
    `);
})

server.listen(5000);