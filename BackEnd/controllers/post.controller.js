import Post from '../models/post.model.js';

export const createPost = async (req, res, next) => {
    try {
        const post = await Post.create(req.body);
        return res.status(201).json(post);
    } catch (error) {
        next(error);
    }
}