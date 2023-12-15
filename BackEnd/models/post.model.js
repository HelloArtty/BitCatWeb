import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        catBreed: {
            type: String,
            required: true,
        },
        age:{
            type: Number,
            required:true,
        },
        male:{
            type: Boolean,
            required: true,
        },
        female:{
            type: Boolean,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        imageUrls: {
            type: Array,
            required: true,
        },
        userRef: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Post = mongoose.model('Post', postSchema);

export default Post;