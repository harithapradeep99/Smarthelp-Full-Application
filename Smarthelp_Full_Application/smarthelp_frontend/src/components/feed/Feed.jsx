import { useContext, useEffect, useState } from "react"
import Post from "../post/Post"
import Share from "../share/Share"
import "./feed.css"
import axios from "axios"
import { AuthContext } from "../../context/AuthContext"



export default function Feed({username}) {
  const [posts, setPosts]= useState([]);
  // const { user } = useContext(AuthContext); //authe...
  const user = JSON.parse(localStorage.getItem("user"));
  console.log("user",user);
  // const { user } = useAuthContext();
 
  /*useEffect(()=>{
    const fetchPosts = async()=>{
      const res = await axios.get("posts/timeline/6335de42177e009a698f1984");
      console.log(res)
      /*setPosts(res.data)
    };
    fetchPosts();
  },[]);*/

useEffect(()=>{
    const fetchPosts = async()=>{
      const res = username 
      ? await axios.get("/api/posts/profile/"+ username) 
      : await axios.get("/api/posts/timeline/" + user._id);
      setPosts(res.data.sort((p1,p2)=>{
        return new Date (p2.createdAt) - new Date (p1.createdAt);
      }))
    };
    fetchPosts();
    },[username, user._id]);


  return (
    <div className="feed">
      <div className="feedWapper">
        {/*username === "6335de36177e009a698f1982".username && <Share/>*/}
        {(!username || username === user.username) && <Share/>}
        {posts.map((p)=>(
          <Post key={p._id} post={p}/>
        ))}
        
        
      </div>
    </div>
  )
}
