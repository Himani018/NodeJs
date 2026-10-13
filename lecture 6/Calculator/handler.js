const {sumRequestHandler } = require('./sum'); //we have exported it as named export so here we have destructure thats why we write name in {}
const requestHandler = (req, res) => {
  if (req.url == "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Calculator</title></head>");
    res.write("<body><h1>Hey!Welcome to our Web</h1>");
    res.write('<a href="/calculator">SUM</a>');
    return res.end();
  }
  if (req.url.toLowerCase() === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Calculator</title></head>");
    res.write(`<body>
      <form action="/calculate-result" method="POST">
      <input type = "number" name =a id="a" />
      <input type = "number" name=b id="b" />
      <button>Calculate</button> 
      </form>
      </body> 
      </html>
      `);
    return res.end();
  }
  else if (req.url.toLowerCase()==="/calculate-result" && req.method == "POST") {
    return sumRequestHandler(req,res);
  }
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Calculator</title></head>");
    res.write("<body><h1>Error :404 , Page not found </h1>");
    return res.end();

};
module.exports = requestHandler;
