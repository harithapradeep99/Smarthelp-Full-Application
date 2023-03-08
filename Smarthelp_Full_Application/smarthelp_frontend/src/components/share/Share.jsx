//import { EmojiEmotions, Label, PermMedia, Room } from "@mui/icons-material";
import { PermMedia, } from "@mui/icons-material";  //////
import { useContext, useRef, useState } from "react";
import "./share.css";
import axios from "axios"

import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Share() {
    //this is for athuors
    //var userr="6335de36177e009a698f1982";

    const { user } = useContext(AuthContext);//authe...

    const PF = "http://localhost:5000/images/";
    const desc =useRef();
    const [file,setFile] = useState(null);
    

    
    const submitHandler = async(e)=>{
        e.preventDefault();
        const newPost ={
            userId:user._id,
            //userId:userr,
            desc:desc.current.value,
        };
        newPost.img = "";

        if(file){
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("name", fileName);
            data.append("file",file);
            newPost.img = fileName;
            console.log(newPost);
            try{
                await axios.post("/api/upload", data);

            }catch (err) {}
        }

        try{
            await axios.post("/api/posts",newPost);
            window.location.reload()

        } catch (err) {}
    };


  return (
    <div className="share">
        <div className="shareWapper">
            <div className="shareTop">
            <Link to ={`/profile/${user.username}`}>
                <img className="shareProfileImg" 
                src={user.profilePicture? PF+user.profilePicture: PF+"person/noAvatar.png"} 
                alt="" />
                </Link>
                <input placeholder={"what'in your mind "+user.username+"?" }
                className="shareInput" ref={desc} />
            </div>
            <hr className="shareHr"/>

            <form className="shareBottom" onSubmit={submitHandler}>
                <label htmlFor="file" className="shareOptions">
                    <div className="shareOption">
                        <PermMedia htmlColor="tomato" className="shareIcon"/>
                        <span className="shareOptionText">Photo or Video</span>
                        <input style={{display:"none"}} 
                        type="file" 
                        id="file" 
                        accept=".png,.jpeg,.jpg"  
                        onChange={(e)=>setFile(e.target.files[0])}/>
                    </div>
                </label>
                    {/*<div className="shareOption">
                        <Label htmlColor="blue" className="shareIcon"/>
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <Room htmlColor="green" className="shareIcon"/>
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                        <span className="shareOptionText">Feelings</span>
  </div>           */}
                
                <button className="shareButton" type="submit" >Share</button>
            </form>
        </div>
    </div>
  )
}
