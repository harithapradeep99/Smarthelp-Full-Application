// import { useContext, useRef, useState } from "react";
// import ChatOnline from "../../components/chatOnlie/ChatOnline";
// import Conversation from "../../components/conversations/Conversation";
// import Message from "../../components/message/Message";
// import "./messenger.css";
// import { AuthContext } from "../../context/AuthContext";
// import { useEffect } from "react";
// import axios from "axios";
// import {io} from "socket.io-client"

// export default function Messenger() {
//   const [conversations, setConversations]=useState([]);
//   const [currentChat, setCurrentChat]=useState(null);
//   const [messages, setMessages]=useState([]);
//   const [newMessage, setNewMessage]=useState("");
//   const [arrivalMessage, setArrivalMessage]=useState(null);
//   //const [socket, setSocket]=useState(null);               //
//   const socket = useRef();
//   const {user} = useContext(AuthContext);
//   const scrollRef = useRef();
  

//   // useEffect(()=>{                                   //one wenne na me kramaya
//   //   setSocket(io("ws://localhost:8900"))
//   // },[]);

//   // useEffect(()=>{
//   //   socket?.on("welcom",message=>{
//   //     console.log(message)
//   //   })
//   // },[socket])
//   // console.log(socket)      //meka one na

//   useEffect(()=>{
//     socket.current = io("ws://localhost:8900");
//     socket.current.on("getMessage", (data)=>{
//       setArrivalMessage({
//         sender: data.senderId,
//         text: data.text,
//         createdAt:Date.now(),
//       });
//     });
//   },[]);

//   useEffect(()=>{
//     arrivalMessage && currentChat?.members.includes(arrivalMessage.sender) &&
//     setMessages((prev)=>[...prev,arrivalMessage]);
//   },[arrivalMessage,currentChat]);

// // useEffect(()=>{
// //   socket.current = io("ws://localhost:8900");   //meedan 2.8ta
// // }, []);

//   useEffect(()=>{
//     socket.current.emit("addUser", user._id);
//     socket.current.on("getUsers",(users)=>{
//       console.log(users);
//     });
//   },[user]);

  
//   useEffect(()=>{
//     const getConversations = async()=>{
//       try{
//         const res = await axios.get("/conversations/"+user._id);
//         setConversations(res.data);
//       }catch(err){
//         console.log(err);
//       }
//     };
//     getConversations();
//   },[user._id]);

//   useEffect(()=>{
//     const getMessages = async()=>{
//       try{
//         const res = await axios.get("/messages/"+currentChat?._id);
//         setMessages(res.data);
//       }catch(err){
//         console.log(err);
//       }
//     };
//     getMessages();
//   },[currentChat]);



//   const handleSubmit = async(e)=>{
//     e.preventDefault();
//     const message = {
//       sender:user._id,
//       text:newMessage,
//       conversationId:currentChat._id,
//     };
    
//     const receiverId = currentChat.members.find(
//       (member)=> member !== user._id
//     );

//     socket.current.emit("sendMesage",{
//       senderId:user._id,
//       receiverId,
//       text:newMessage,
//     });

//     try{
//       const res = await axios.post("/messages", message);
//       setMessages([...messages, res.data]);
//       setNewMessage("")

//     }catch(err){
//       console.log(err);
//     }
//   };

//   useEffect(()=>{
//     scrollRef.current?.scrollIntoView({behavior:"smooth"})

//   },[messages])



//   return (
//     <>
//     <div className="messenger">
//       <div className="chatMenu">
//         <div className="chatMenuWrapper">
//           <input type="text" placeholder="Search your Friends" className="chatMenuInput"/>
//           {conversations.map((c)=>(
//             <div onClick={()=>setCurrentChat(c)}>
//               <Conversation conversation={c} currentUser={user}/>
//             </div>
//           ))}
//         </div>
//       </div>
      
//       <div className="chatBox">
//         <div className="chatBoxWrapper">
//           {currentChat ?
//           (
//           <>
//           <div className="chatBoxTop">
//             {messages.map((m)=>(
//               <div ref={scrollRef}>
//                 <Message message={m} own={m.sender === user._id}/>
//               </div>
            
//             ))}
          
//           </div>

//           <div className="chatBoxBottom">
//           <textarea 
//           className="chatMessageInput" 
//           placeholder="write and send message" 
//           /*name="" id="" cols="30" rows="10"*/
//           onChange={(e)=>setNewMessage(e.target.value)}
//           value={newMessage}
//           ></textarea>
//           <button className="chatSubmitBotton" onClick={handleSubmit}>Send</button>
//           </div>

//           </>
//           ):(<span className="noConversationText">Open Conversation</span>
//           )}
//         </div>
//      </div>

//      <div className="chatOnline">
//       <div className="chatOnlineWrapper">
//         <ChatOnline/>
//       </div>
//      </div>
//     </div>
//     </>
//   );
// }



import "./messenger.css";
//import Topbar from "../../components/topbar/Topbar";
import Conversation from "../../../components/conversations/Conversation";
import Message from "../../../components/message/Message";
//import ChatOnline from "../../components/chatOnline/ChatOnline";
import { useContext, useEffect, useRef, useState } from "react";

import axios from "axios";
import { io } from "socket.io-client";
import { AuthContext } from "../../../context/AuthContext";

export default function Messenger() {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const socket = useRef();
  const { user } = useContext(AuthContext);
  console.log("User Data",user);
  const scrollRef = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", user._id);
    socket.current.on("getUsers", (users) => {
      setOnlineUsers(
        user.followings.filter((f) => users.some((u) => u.userId === f))
      );
    });
  }, [user]);

  useEffect(() => {
    const getConversations = async () => {
      let result = [];
      try {
        const res = await axios.get("/api/conversations/" + user._id);
        
        result = res.data;
        setIsLoading(false);
        console.log("Conversation",result);
        console.log("/api/conversations/" + user._id)
        localStorage.setItem("conversation",res.data);
        setConversations(res.data);
        console.log("Conversation1",conversations);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [user._id]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get("/api/messages/" + currentChat?._id);
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: user._id,
      text: newMessage,
      conversationId: currentChat._id,
    };

    const receiverId = currentChat.members.find(
      (member) => member !== user._id
    );

    socket.current.emit("sendMessage", {
      senderId: user._id,
      receiverId,
      text: newMessage,
    });

    try {
      const res = await axios.post("/api/messages", message);
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search for friends" className="chatMenuInput" />
            {!isLoading && conversations.map((c) => (
              <div onClick={() => setCurrentChat(c)}>
                <Conversation conversation={c} currentUser={user} />
              </div>
            ))}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {currentChat ? (
              <>
                <div className="chatBoxTop">
                  {messages.map((m) => (
                    <div ref={scrollRef}>
                      <Message message={m} own={m.sender === user._id} />
                    </div>
                  ))}
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    className="chatMessageInput"
                    placeholder="write something..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  ></textarea>
                  <button className="chatSubmitButton" onClick={handleSubmit}>
                    Send
                  </button>
                </div>
              </>
            ) : (
              <span className="noConversationText">
                Open a conversation to start a chat.
              </span>
            )}
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            
          </div>
        </div>
      </div>
    </>
  );
}