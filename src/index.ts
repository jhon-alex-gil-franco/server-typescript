import Server from "./server/server";

 const server= Server.init(3000);
 server.start(()=>console.log("server on port 3000"))