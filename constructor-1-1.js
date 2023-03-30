const http = requeir("http")
const url = requeir("url")
const fs = requeir("fs")

class server {
  constructor(port){
    this.port = port;
  }
  start(){}
  handleGetRequest(req,res) {}
  handlePostRequest(req,res){}
}
const server = new Server(2000)
server.start();
