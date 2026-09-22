const sumRequestHandler = (req,res)=>{
    const body=[];
    req.on('data',chunk=>{
      body.push(chunk);
    });
    req.on('end',()=>{
      const bodyStr =Buffer.concat(body).toString();
      const params = new URLSearchParams(bodyStr);
      const bodyObj = Object.fromEntries(params);
      const Result =Number(bodyObj.a)+Number(bodyObj.b);
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Sum result</title></head>");
    res.write(`<body> <h1> The sum id: ${Result} </h1> </body> </html>` );
     return res.end();
    })
    
}
exports.sumRequestHandler = sumRequestHandler ;