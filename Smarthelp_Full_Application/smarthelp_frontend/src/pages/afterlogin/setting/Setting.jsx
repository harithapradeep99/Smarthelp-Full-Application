
// AuthContex ek wenas kla
//AuthReducer ek wenas kla


import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import "./setting.css";

export default function Setting() {
  const {user , dispatch} = useContext(AuthContext);
  const [file, setFile] = useState(null);
  const [file1, setFile1] = useState(null);
  // const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [phonenumber, setphonenumber] = useState(user.phonenumber);
  const [desc, setdesc] = useState(user.desc);
  const [city, setcity] = useState(user.city);
  const [from, setfrom] = useState(user.from);
  const [relationship, setrelationship] = useState(user.relationship);
  // const [password, setPassword] = useState(user.password);
  const [success, setSuccess] = useState(false);

  
  const PF = "http://localhost:5000/images/";
  console.log(user)


  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });//try dan userma gnna hadanne 
    const updatedUser = {
      userId: user._id,
      // username,
      email,
      phonenumber,
      desc,
      city,
      from,
      relationship,
      // password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePicture = filename;
      try {
        await axios.post("/api/upload", data);
      } catch (err) {}
    }
    if (file1) {
      const data = new FormData();
      const file1name = Date.now() + file1.name;
      data.append("name", file1name);
      data.append("file", file1);
      updatedUser.coverPicture = file1name;
      try {
        await axios.post("/api/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.put("/api/users/" + user._id, updatedUser);//try dan userma gnna hadanne  (const res = metika natuwa tibbe)
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });//try dan userma gnna hadanne
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });//try dan userma gnna hadanne
    }
  };


  return (
    <div className="settings">
      <div className="settingsWrapper"> 
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={file ? URL.createObjectURL(file) : user.profilePicture ? 
                PF+user.profilePicture : PF+"person/noAvatar.png"}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
              
            />
          </div>

          

          <label>Cover Picture</label>
          <div className="settingsPP">
            <img
              src={file1 ? URL.createObjectURL(file1) : user.coverPicture ? 
                PF+user.coverPicture : PF+"person/noCover.png"}
              alt=""
            />
            <label htmlFor="file1Input">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="file1Input"
              style={{ display: "none" }}
              onChange={(e) => setFile1(e.target.files[0])}
              
            />
          </div>

          
          {/* <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            
          /> */}
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            
          />

          <label>phonenumber</label>
          <input
            type="text"
            value={phonenumber}
            onChange={(e) => setphonenumber(e.target.value)}
            
          />

           <label>desc</label>
          <input
            type="text"
            value={desc}
            onChange={(e) => setdesc(e.target.value)}
            
          />
          
          <label>city</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setcity(e.target.value)}
            
          />

           <label>from</label>
          <input
            type="text"
            value={from}
            onChange={(e) => setfrom(e.target.value)}
            
          />

           <label>relationship</label>
          <input
            type="text"
            value={relationship}
            onChange={(e) => setrelationship(e.target.value)}
            
          />
          
          {/* <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
           
          /> */}
          <button className="settingsSubmit" type="submit">
            Update
          </button>


          {success && (// try ntifiction after updated
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated
            </span>
          )}
          




        </form>
      </div>

    </div>
  );
}































































/*import "./settings.css";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
import { AuthContext } from './../../../context/OldAuthContext';
import { AuthContext } from './../../../context/AuthContext';

export default function Settings() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={file ? URL.createObjectURL(file) : PF+user.profilePic}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="settingsSubmit" type="submit">
            Update
          </button>
          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated...
            </span>
          )}
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
*/