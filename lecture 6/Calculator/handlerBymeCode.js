
// const requestHandler = (req, res) => {
//   if (req.url == "/") {
//     res.setHeader("Content-Type", "text/html");
//     res.write("<html>");
//     res.write("<head><title>Calculator</title></head>");
//     res.write("<body><h1>Hey!Welcome to our Web</h1>");
//     res.write('<a href="/calculator">SUM</a>');
//     return res.end();
//   }
//   if (req.url.toLowerCase() === "/calculator") {
//     res.setHeader("Content-Type", "text/html");
//     res.write("<html>");
//     res.write("<head><title>Calculator</title></head>");
//     res.write(`<body>
//       <form action="/calculate-result" method="GET">
//       <input type = "number" name =a id="a" />
//       <input type = "number" name=b id="b" />
//       <button>Calculate</button> 
//       </form>
//       </body> 
//       </html>
//       `);
//     return res.end();
//   }
//   if (req.url.startsWith("/calculate-result")) {
//     const url=new URL(req.url,"http://localhost:3001")
//     const a=Number(url.searchParams.get("a"));
//     const b=Number(url.searchParams.get("b"));
//     const result =a+b;
//     res.setHeader("Content-Type", "text/html");
    
//     res.write(`
//           <html>
//           <head>
//            <title>Result</title>
//            </head>
//            <body>
//               <p>The result is :${result}</p><br>
//            </body>
//           </html>
//       `);
//     return res.end();
//   }
// };
// module.exports = requestHandler;
