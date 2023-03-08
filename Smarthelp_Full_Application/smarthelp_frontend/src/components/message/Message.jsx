import "./message.css"
//import{format} from "timeago.js"

export default function Message({message,own}) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img className="messageImg" src="https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528" alt="" />
        
        <p className="messageText" >{message.text}</p>
      </div>

      <div className="messageBottom">{message.createdAt}</div>

    </div>
  );
}
