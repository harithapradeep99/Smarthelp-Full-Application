import "./rightbar.css"
import { Users } from "../../dummyData"
import Online from "../online/Online"
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";

import { Add, Remove } from "@mui/icons-material"
import { AuthContext } from "../../context/AuthContext";

export default function Rightbar({user}) {
  // const PF =process.env.REACT_APP_PUBLIC_FOLDER;
  const PF = "http://localhost:5000/images/";
  const [friends,setFriends]=useState([]);
  const {user:currentUser,dispatch} = useContext(AuthContext)
  // const currentUser = localStorage.getItem("user");
  // const { user:currentUser,dispatch } = useAuthContext();

  const [followed,setFollowed]= useState(currentUser.followings.includes(user?.id));
  // const [followed,setFollowed]= useState(n);

  //var userr="6335de36177e009a698f1982"


  //useEffect(()=>{
   // setFollowed(currentUser.followings.includes(user?.id));
  ///},[currentUser,user.id]);///////////////



  useEffect(()=>{
    const getFriends = async()=>{
      try{
        const friendList = await axios.get("/api/users/friends/"+user._id);
        setFriends(friendList.data)

      }catch(err){
        console.log(err);
      }
    };
    getFriends();

  },[user]);

const handelClick = async()=>{
  try{
    if(followed){
      await axios.put("/api/users/"+user._id+"/unfollow",{userId:currentUser._id});
      // dispatch({type:"UNFOLLOW",payload:user._id})
    }else{
      await axios.put("/api/users/"+user._id+"/follow",{userId:currentUser._id});
      // dispatch({type:"FOLLOW",payload:user._id})
    }
  

  }catch(err){
    console.log(err)
  }
  setFollowed(!followed)
};

  const HomeRightbar=()=>{
    return(
      <>
       {/* <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText"><b>Pola Foster</b> and 
          <b> 3 other friends</b> have a birthday</span>
        </div> */}
        <Link to ={`/messenger/`}>
        <div className="birthdayContainer">
        
          <img className="birthdayImg" src="assets/msg.png" alt="" />
          <span className="birthdayText"><b>Chat With Friends  </b>
          Maintain Your Relationshp
          <b>  See your conversations</b></span>
        </div>
          </Link>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u=>(
            <Online key={u.id} user={u}/>
          ))}
          
          

          

        </ul>
        </>
    )
  }

  const ProfileRightbar =()=>{
    return( 
    <>
    <Link to ={`/setting`}>
    {user.username === currentUser.username && (// go to settimg page
        <button className="rightbarFollowButton" /*onClick={handelClick}*/>
          {"Profile Setting"}
        </button>
      )}
      </Link>




    {user.username !== currentUser.username && (
        <button className="rightbarFollowButton" onClick={handelClick}>
          {followed? "Unfollow" : "Follow"}
          {followed? <Remove/> : <Add/>}
        </button>
      )}
    <h4 className="rightbarTitle">User Information</h4>
    <div className="rightbarInfo">
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">City:</span>
        <span className="rightbarInfoValue">{user.city}</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">From:</span>
        <span className="rightbarInfoValue">{user.from}</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Relationship:</span>
        <span className="rightbarInfoValue">{
          user.relationship===1? "single" : 
          user.relationship===2? "Married" : "-"}
        </span>
      </div>
    </div>
    <h4 className="rightbarTitle">User Friends</h4>
    <div className="rightbarFollowings">
      {friends.map((friend)=>(
        <Link to={"/profile/"+friend.username} style={{textDecoration:"none"}}>
      <div className="rightbarFollowing">
        <img src={friend.profilePicture ? PF +friend.profilePicture : PF+"person/noAvatar.png"}
        alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">{friend.username}</span>
      </div>
      </Link>
      ))}
      
    </div>
    </>
      )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWapper">
       {
       user ? <ProfileRightbar/> : <HomeRightbar/> }
      </div>
    </div>
  )
}
