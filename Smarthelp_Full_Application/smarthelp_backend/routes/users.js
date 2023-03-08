const router = require("express").Router();
/*const user =require("../models/User");*/
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
/*const { findById } = require("../models/User");*/

//update user
/*router.put("/:id", async(req,res)=>{
    if(req.body.userId === req.params.id || req.body.isAdmin) {
        if(req.body.password){
            try{
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            }catch(err){
                return res.status(500).json(err);
        }
    }
    try{
        const user = await User.findByIdAndUpdate(req.params.id,{$set:req.body});
        res.status(200).json("Updated")
    }catch(err){
        return res.status(500).json(err);
    }
    } else{
        return res.status(403).json("U can update only ur accnt");
    }
});
*/

//UPDATE    other one
router.put("/:id", async (req, res) => {
  // if (req.body.userId === req.params.id) {
  if (req.body.password) {
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
  // } else {
  //   res.status(401).json("You can update only your account!");
  // }
});

//delete user
router.delete("/:id", async (req, res) => {
  console.log(req.body);
  console.log(req.params.id);
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).json("Deleted");
  } catch (err) {
    return res.status(500).json(err);
  }
});

//get a user
router.get("/", async (req, res) => {
  const userId = req.query.userId;
  const username = req.query.username;
  try {
    const user = userId
      ? await User.findById(userId)
      : await User.findOne({ username: username });
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get friends
router.get("/friends/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const friends = await Promise.all(
      user.followings.map((friendId) => {
        return User.findById(friendId);
      })
    );
    let friendList = [];
    friends.map((friend) => {
      const { _id, username, profilePicture } = friend;
      friendList.push({ _id, username, profilePicture });
    });
    res.status(200).json(friendList);
  } catch (err){
    res.status(500).json(err);
  }
});

//follow user
router.put("/:id/follow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({ $push: { followings: req.params.id } });
        res.status(200).json("user ha been followed");
      } else {
        res.status(403).json("u allredy folllow this user");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("u cant follow ur self");
  }
});

//unfollow user
router.put("/:id/unfollow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({ $pull: { followers: req.body.userId } });
        await currentUser.updateOne({ $pull: { followings: req.params.id } });
        res.status(200).json("user has been unfollowed");
      } else {
        res.status(403).json("u dont follow this user");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("u cant unfollow ur self");
  }
});
//try get all user
// router.get("/",(req,res,next)=>{
//     User.find().
//     then(result=>{
//         res.status(200).json({
//             userData:result
//         });
//     }).catch(err=>{
//         console.log(err);
//         res.status(500).json({
//             error:err
//         })
//     });
// });
//GET ALL USER
router.get("/all", async (req, res) => {
  const query = req.query.new;
  try {
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
