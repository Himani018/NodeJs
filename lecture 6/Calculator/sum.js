const sumRequestHandler = (req,res)=>{
   console.log("1.In sum request handler", req.url);
    const body=[];
    let result;
    req.on('data',chunk=>{
      body.push(chunk);
      console.log("2.chunk came");
    });
    req.on('end',()=>{
      console.log("3.End event");
      const bodyStr =Buffer.concat(body).toString();
      const params = new URLSearchParams(bodyStr);
      const bodyObj = Object.fromEntries(params);
      let Result =Number(bodyObj.a)+Number(bodyObj.b);
      console.log(result) //it will have undefined bcz chunk came later and this get executed first
    }); //this event doesnt based on order of how they written they can be in different order.
    console.log("4.sending the response");
    // below line called first bcz if data chunk is not arrived these lines get execute
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Sum result</title></head>");
    res.write(`<body> <h1> The sum id: ${result} </h1> </body> </html>` );
    return res.end();
    
}
exports.sumRequestHandler = sumRequestHandler ;