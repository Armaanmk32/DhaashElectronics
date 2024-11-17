import mongoose from "mongoose";

const userSchame = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
}, {minimize: false})

const userModel = mongoose.models.user || mongoose.model("user", userSchame)

export default userModel