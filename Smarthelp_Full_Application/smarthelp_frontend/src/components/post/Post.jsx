import { MoreVert } from "@mui/icons-material"
import "./post.css"
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
/*import { format } from 'timeago.js';*/

//authe..


export default function Post({post}) {
    const [like,setLike] = useState(post.likes.length);
    const [isLiked,setIsLiked] = useState(false);
    const [user,setUser] = useState({});
    // const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const PF = "http://localhost:5000/images/";

    const { user: currentUser } = useContext(AuthContext);//authe...

  //var currentUser= "6335de36177e009a698f1982";
    /*useEffect(()=> {
      setIsLiked(post.likes.includes(currentUser._id));      /// Meka wadak na dan nm.........
    },[currentUser._id,post.likes]);*/
    useEffect(()=> {
      setIsLiked(post.likes.includes(currentUser._id));
    
    },[currentUser._id,post.likes]);

    useEffect (()=>{
        const fetchUser = async()=>{
          const res = await axios.get(`/api/users?userId=${ post.userId }`);
          setUser(res.data)
        };
        fetchUser();
      },[post.userId]); 
    
  
    const likeHandler =()=>{
      try{
        //axios.put("/posts/"+post._id+"/like",{userId:"6335de36177e009a698f1982"});
        axios.put("/api/posts/"+post._id+"/like",{userId:currentUser._id});

      }catch(err){}
      setLike(isLiked ? like-1 : like+1);
      setIsLiked(!isLiked);
    }
// testing delete post , 
// not competed..
    // const deleteHandler = async ()=> {
    //   try{
    //     await axios.delete(`/posts/${post._id}`,{
    //       data: {username: user.username},
    //     });
    //     window.location.replace("/")

    //   }catch(err){}
    // }
    // console.log(post.user_id=== user.user_id)
  return (
    <div className="post">
        <div className="postWapper">
            <div className="postTop">

                <div className="postTopLeft">
                  <Link to ={`/profile/${user.username}`}>
                    <img className="postProfileImg" src={user.profilePicture ? PF+user.profilePicture: PF+"person/noAvatar.png"} alt="" />
                  </Link>
                    <span className="postUsername">{user.username}</span>
                    <span className="postDate">{post.date}</span>
                   {/* <span className="postDate">{format(post.createdAt)}</span>*/}
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className="postImg" src={PF+post.img} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    {/*<img className="likeIcon" src={`${PF}like.png`} onClick= {likeHandler} alt="" />*/}
                    <img className="likeIcon" src={`${PF}heart.png`} onClick= {likeHandler} alt="" />
                    <span className="postLikeCounter">{like} people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} comments</span>
                   {/* {post.userId === user?.userId && (
                    <img className="likeIcon" src={`${PF}delete.png`} onClick= {deleteHandler} alt="" />
                   )}*/}
                </div>
            </div>
        </div>
    </div>
  )
}
