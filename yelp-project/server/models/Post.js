const mongoose = require('mongoose');

const PostCard = new mongoose.Schema({
  title:{
    type:String,
  },
  description:{
    type:String,
  },
  user:{
    type:String,
  }
});

const PostModel = mongoose.model('Post', PostCard);

module.exports = {
    PostModel
};
