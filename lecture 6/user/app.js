const http = require("http");
const RequestHandler=require('./user'); //its not necessary to have the same name at the both files

const server = http.createServer(RequestHandler);

const PORT = 3001;
// server.listen(3001);
server.listen(PORT, () => {
  console.log(`server runnig on adress-http://localhost:${PORT}`);
});