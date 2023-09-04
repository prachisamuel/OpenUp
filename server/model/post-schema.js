import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique:true
    },
    color: String,
    posttext: String,
    like: Number,
    commenttext: String
});

const Post = mongoose.model('post',postSchema);

export default Post;