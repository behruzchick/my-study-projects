const {userModel } = require('../models/User');
const {PostnotFound404,userNotFound404} = require('../errors/404Error')
const {enterNameError} = require('../errors/403Error')
const {internalServerError} = require('../errors/500Error');
const { PostModel } = require('../models/Post');


const createPost = async (req, res) => {
    try {
         const savedPost = await PostModel.create({
            title:req.body.title,
            description:req.body.description,
            user:req.params.id
        });
        
        await savedPost.save();

        res.json(savedPost);
    } catch (error) {
        console.error(error);
        return internalServerError(req,res)
    }
}

const getAllPosts = async (req, res) => {
    try {
        const posts = await PostModel.find();

        if (!posts) {
            return PostnotFound404(req,res)
        }
        res.json(posts)

    }catch (error) {
        console.log(error);
    }
}


module.exports = {
    createPost,
    getAllPosts
}