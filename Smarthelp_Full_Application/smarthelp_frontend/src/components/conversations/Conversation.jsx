
import { useEffect, useState } from "react";
import "./conversation.css";
import axios from "axios";

export default function Conversation({conversation, currentUser}) {
  const [user,setUser]= useState(null)   // awlak unoth kotu warahana danna
  
  // const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const PF = "http://localhost:5000/images/";

 
  useEffect(()=>{
    const friendId =conversation.members.find((m)=> m !== currentUser._id);

    const getUser =async ()=>{
      try{

        const res =await axios.get("/api/users?userId=" + friendId);
        setUser(res.data)
       console.log("Friend Data",res.data)
       console.log("Friend Data1",user)

      }catch(err){
        console.log("User friend error",err);
      }

    };
    getUser();
    },[currentUser,conversation]);


  return (
    <div className="conversation">
        <img className="conversationImg" 
        //src="https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528"
        src={user?.profilePicture ? PF+user.profilePicture: PF+"person/noAvatar.png"}
        alt="" />
        <span className="conversationName">{user?.username}</span>

    </div>
  );
}
