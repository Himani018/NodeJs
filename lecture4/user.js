const http = require("http");
const fs =require('fs');
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  // process.exit(); //after first request event loop will be exited so the page will also show error after first req
  //it is used to stop event loop

  // sending response

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Complete Coding</title></head>");
    res.write("<body><h1>Enter your detail : </h1>");

    res.write('<form action="/submit-details" method="POST">');
    res.write(
      '<input type="text" name="username" placeholder="enter your name"><br>',
    );
    res.write('<label for="male">Male</label>');
    res.write(
      '<input type="radio" id="male" name="gender" value="male" /><br>',
    );
    res.write('<label for="female">Female</label>');
    res.write(
      '<input type="radio" id="female" name="gender" value="female" /><br>',
    );
    res.write('<input type = "submit" value="submit">');
    res.write("</form>");

    res.write("</body>");
    res.write("</html>");
    return res.end(); //it will terminate the method and end the response
  } else if (req.url.toLowerCase()=== "/submit-details" && req.method =="POST") {
      fs.writeFileSync('user.txt','himani');
      res.statusCode=302; //302 code means redirecting...and 200 is by default code means ok
      res.setHeader('Location','/');//we set the location and adress or url is /
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
