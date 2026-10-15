const http = require("http");
const fs = require("fs");
const userRequestHandler=((req, res) => {
  console.log(req.url, req.method);
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
  } else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method == "POST"
  ) {

    const body = []; //we made it to make a buffer 
    req.on("data", (chunk) => {
      //on means we want to liten..data means whenever new data comes than liten and callback to get notified that new data is arrived
      console.log(chunk);
      body.push(chunk); //it push every chunk into buffer
    });
    req.on('end',()=>{
      const fullBody=Buffer.concat(body).toString();
      console.log(fullBody);
      const params = new URLSearchParams(fullBody);
      // const bodyObject ={};
      // for(const[key,value] of params.entries()){
      //   bodyObject[key]=value;
      // }
      const bodyObject = Object.fromEntries(params);
      console.log(bodyObject);
      //writefilsync block everything means the main thread do this work so it can't do other work while doing it
  //    fs.writeFileSync('user.txt',JSON.stringify(bodyObject))
      fs.writeFile('user.txt',JSON.stringify(bodyObject),error =>{
          console.log("data written sucessfully using worker thread ashynchronesly");
          res.statusCode = 302; 
          res.setHeader("Location", "/");
          return res.end();
      });
    
    })
  } else {
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Complete Coding</title></head>");
  res.write("<body><h1>Like share sub</h1></body>");
  res.write("</html>");
  return res.end();
  }                                        
});
                                      
module.exports = userRequestHandler; //exporting the anonymous function using module.export
