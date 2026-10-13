const http = require('http');
const Rhandler = require('./handler');
const server=http.createServer(Rhandler);
const PORT=3001;
server.listen(PORT,()=>{
  console.log(`Server address : http://localhost:${PORT}`);
})