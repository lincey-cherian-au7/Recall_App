const postModel = require('../models/post.model')

const posts ={}

posts.getPost =async(req,res)=>{
    try {
        const postMessages =await postModel.find()
        res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

posts.createPost = async(req,res)=>{
    const post = req.body;

    const newPost = new postModel(post)
    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({message:error.message})
        
    }

}

module.exports= posts