require('dotenv').config();
const { Server } = require('socket.io');
const Messsage = require('./models/schemas/MessageSchema');

// Socket Setup function jo server par socket.io setup kar raha h
const setupSocket = (serverindexjs) => {
    // Server ke liye naya Socket.IO instance create kar rahe hain
   const io = new Server(serverindexjs, {
      cors: {
         origin: [process.env.ORIGIN],
         methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
         credentials: true
      }
   });
   // User aur unke socket IDs ko store karne ke liye ek Map banaya hai
   const userSocketMap = new Map();

   //Socket Connection Event Jab user connect hota hai to ye function run hota hai
   io.on("connection", (socket) => {
       // Socket ke query parameter se userID le rahe hain
      const userID = socket.handshake.query.userID;
      if (userID) {
         // Map me userID aur socketID ko store kar rahe hain
         userSocketMap.set(userID, socket.id);
         console.log(`A User Connected ${userID} with SocketID is ${socket.id}`)
         console.log(userSocketMap);
      } else {
         console.log('UserId is not Provided')
      }

      // Socket Disconnect Event  Jab user disconnect hota hai
      socket.on("disconnect", () => {
         console.log(`Client is Disconnect with SocketID ${socket.id}`);
         for (const [userID, socketID] of userSocketMap.entries()) {
            if (socketID === socket.id) {
               // User ke disconnect hone par map se user ko delete kar rahe hain
               userSocketMap.delete(userID);
               break;
            }
         }
      })
      //Messsage Event event jo frontend se message bhejne ke liye aata hai
      socket.on("sendMessage", async (message)=>{
         // Sender ki socketID Map se le rahe hain
        const senderSocketID = userSocketMap.get(message.sender);
        console.log('senderSoc',senderSocketID);
        // Recipient ki socketID Map se le rahe hain
        const recipientSocketID = userSocketMap.get(message.recipent);
        console.log('recipentSoc',recipientSocketID);
        // Message ko MongoDB me save kar rahe hain
        const createdMessage = await Messsage.create(message);
        console.log('Saved MSg', createdMessage);
         // Naya saved message ko populate kar rahe hain tak ki user ka detail mile
        const messageData = await Messsage.findById(createdMessage._id)
        .populate("sender", "id email firstname lastname image") // Sender ka full detail
        .populate("recipent","id email firstname lastname image"); // Recipient ka full detail
        // message Reciever is online
        if(recipientSocketID){
          io.to(recipientSocketID).emit("recieveMessaage", messageData);
        }
        //send to the sender confirmation message
        if(senderSocketID){
         io.to(senderSocketID).emit("recieveMessaage", messageData);
       }
      })
   })
}

module.exports = setupSocket;