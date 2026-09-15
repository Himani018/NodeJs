const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  // process.exit(); //after first request event loop will be exited so the page will also show error after first req
  //it is used to stop event loop

  // sending response

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Complete Coding</title></head>");
    res.write("<body><h1>Welcome to home</h1></body>");
    res.write("</html>");
    return res.end(); //it will terminate the method and end the response
    
  } else if (req.url === "/products") {
     res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Complete Coding</title></head>");
  res.write("<body><h1>Checkout our product</h1></body>");
  res.write("</html>");
  res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Complete Coding</title></head>");
  res.write("<body><h1>Like share sub</h1></body>");
  res.write("</html>");
  return res.end();
});
const PORT = 3001;
// server.listen(3001);
server.listen(PORT, () => {
  console.log(`server runnig on adress-http://localhost:${PORT}`);
});
