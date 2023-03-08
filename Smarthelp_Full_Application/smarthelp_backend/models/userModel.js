const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },    
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phonenumber: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "user",
    },

    username:{
        type:String,
        require: true,
        min: 3,
        max: 20,
        unique: true,
    },
    profilePicture:{
        type:String,
        default: "",
    },
    coverPicture:{
        type:String,
        default: "",
    },
    followers:{
        type:Array,
        default:[],
    },
    followings:{
        type:Array,
        default:[],
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    desc:{
        type:String,
        max:50,
    },
    city:{
        type:String,
        max:50,
    },
    from:{
        type:String,
        max:50,
    },
    relationship:{
        type:Number,
        enum:[1,2,3],
    },
});
// static signup method
userSchema.statics.signup = async function (
    fname,
    lname,
    email,
    phonenumber,
    password,
    username
) {
    //validation
    if (!email || !password || !fname || !lname || !phonenumber || !username) {
        throw Error("All fields must be filled");
    }
    if (!validator.isEmail(email)) {
        throw Error("Email is not valid");
    }
    if (!validator.isStrongPassword(password)) {
        throw Error("Password not strong enough");
    }

    const exists = await this.findOne({ email });

    if (exists) {
        throw Error("Email already in use");
    }
    // hashing password -->
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({
        fname,
        lname,
        email,
        phonenumber,
        password: hash,
        username,
    });

    return user;
    //-->
};

//Static login method
userSchema.statics.login = async function (email, password) {
    if (!email || !password) {
        throw Error("All fields must be filled");
    }

    const user = await this.findOne({ email });
    if (!user) {
        throw Error("Incorrect email");
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        throw Error("Incorrect password");
    }

    return user;
};

module.exports = mongoose.model("User", userSchema);
