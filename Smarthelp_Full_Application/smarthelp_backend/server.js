require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");

const userRoutes = require("./routes/user");
const projectRoutes = require("./routes/project");
const donationRoutes = require("./routes/donationsRoute");
const eventRoutes = require("./routes/eventRoute");

const communityRoutes = require("./routes/communityRoute");
const postRoute = require("./routes/posts");
const conversationRoute = require("./routes/conversations");
const messageRoute = require("./routes/messages");
const usersRoutes = require("./routes/users");
const path = require("path");
dotenv.config(); 

const app = express();
app.use("/images", express.static(path.join(__dirname, "public/images")))
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
  destination:(req, file, cb) => {
      cb(null, "public/images");
  },
  filename: (req, file, cb) =>{
      cb(null, req.body.name);
  },
});

const upload =multer({storage});
app.post("/api/upload", upload.single('file'),(req, res,)=>{
  try{
      return res.status(200).json("file uploaded")

  }catch(err){
      console.log(err);
  }
}),

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//Routes - sample -direct
// app.get('/', (req, res) => {
//     res.json({ msg: 'Wellcome' })
// })

//Routes
app.use("/api/user", userRoutes);

app.use("/api/projects", projectRoutes);
app.use("/api/donations", donationRoutes);
app.use("/api/events", eventRoutes);

app.use("/api/community", communityRoutes);
//Created by haritha
app.use("/api/posts", postRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/users", usersRoutes);

//common route
const commonRoute = require("./routes/commonRoute");
app.use("/api/common", commonRoute);
//

mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to db &listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
