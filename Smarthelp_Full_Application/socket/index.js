// const io =require("socket.io")(8900,{
//     cors:{
//         origin:"http://localhost:3000",
//     },
// });

// // import { createServer } from "http";
// // import { Server } from "socket.io";

// // const httpServer = createServer();
// // const io = new Server(httpServer, {
// //   cors: {
// //     origin: "http://localhost:3000"
// //   }
// // });
// // httpServer.listen(8900);










// let users = [];

// const addUser = (userId, socketId)=>{
//     !users.some((user)=>user.userId === userId) &&
//     users.push({ userId, socketId});
// };

// const removeUser = (socketId)=>{
//     users = users.filter((user)=>user.socketId !== socketId);
// };

// const getUser = (userId)=>{
//     return users.find((user)=>user.userId === userId);
// };



// io.on("connection",(socket) => {
//     //when connect
//     console.log("user conected");
//     //io.emit("welcom","hello, this s socket server!");            // ain kla meka.
//     //take userId and socketId from user
//     socket.on("addUser",(userId)=>{
//         addUser(userId, socket.id);
//         io.emit("getUsers", users);

//     });
    
//     //send and get message
//     socket.on("sendMessage", ({senderId,receiverId,text})=>{
//         const user = getUser(receiverId);
//         io.to(user.socketId).emit("getMessage",{
//             senderId,
//             text,
//         });
//     });



//     //when disconnect
//     socket.on("disconnect", ()=>{
//         console.log("user disconnected");
//         removeUser(socket.id);
//         io.emit("getUsers",users);
//     });

// });



const io = require("socket.io")(8900, {
    cors: {
      origin: "http://localhost:3001",
    },
  });
  
  let users = [];
  
  const addUser = (userId, socketId) => {
    !users.some((user) => user.userId === userId) &&
      users.push({ userId, socketId });
  };
  
  const removeUser = (socketId) => {
    users = users.filter((user) => user.socketId !== socketId);
  };
  
  const getUser = (userId) => {
    return users.find((user) => user.userId === userId);
  };
  
  io.on("connection", (socket) => {
    //when ceonnect
    console.log("a user connected.");
  
    //take userId and socketId from user
    socket.on("addUser", (userId) => {
      addUser(userId, socket.id);
      io.emit("getUsers", users);
    });
  
    //send and get message
    socket.on("sendMessage", ({ senderId, receiverId, text }) => {
      const user = getUser(receiverId);
      io.to(user.socketId).emit("getMessage", {
        senderId,
        text,
      });
    });
  
    //when disconnect
    socket.on("disconnect", () => {
      console.log("a user disconnected!");
      removeUser(socket.id);
      io.emit("getUsers", users);
    });
  });