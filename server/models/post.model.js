const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title:String,
    message:String,
    tags:[String],
    creator:String,
    selectedFile:String,
    likeCount:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default:new Date()
    }
})

const postModel = mongoose.model('post',postSchema);

module.exports= postModel;