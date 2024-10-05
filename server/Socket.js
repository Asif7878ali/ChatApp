
const { Server } = require('socket.io');
require('dotenv').config();

const setupSocket = (serverindexjs) =>{
   const io = new Server( serverindexjs, {
    cors:{
        origin : [process.env.ORIGIN],
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
        credentials : true
    }
   });
   
   const userSocketMap = new Map();

   const disconnect = (socket)=>{
     console.log(`Client is Disconnect with SocketID ${socket.id}`);
     for( const [userID, socketID] of userSocketMap.entries() ){
           if(socketID === socket.id){
              userSocketMap.delete(userID);
              break;
           }
     }
   }

   io.on("connection",(socket) =>{
      const userID = socket.handshake.query.userID;
      if(userID){
         userSocketMap.set(userID, socket.id); 
         console.log(`A User Connected ${userID} with SocketID is ${socket.id}`)
       } else{
           console.log('UserId is not Provided')
       }
    socket.on("disconnect", () =>{
         disconnect(socket);
    })   
   })
}

module.exports = setupSocket;