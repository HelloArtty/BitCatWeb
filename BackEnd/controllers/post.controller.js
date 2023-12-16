import Post from '../models/post.model.js';
import { errorHandler } from '../utils/error.js';

export const createPost = async (req, res, next) => {
    try {
        const post = await Post.create(req.body);
        return res.status(201).json(post);
    } catch (error) {
        next(error);
    }
};

export const deletePost = async (req, res, next) => {
    const post = await Post.findById(req.params.id);
    if (!post) {
        return next(errorHandler(404, 'Post not found'));
    }
    if (req.user.id !== post.userRef) {
        return next(errorHandler(404, 'You are not authorized to delete this post'));
    }
    try {
        await Post.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        next(error);
    }

};

export const updatePost = async (req, res, next) => {
    const post = await Post.findById(req.params.id);
    if (!post) {
        return next(errorHandler(404, 'Post not found!'));
    }
    if (req.user.id !== post.userRef) {
        return next(errorHandler(401, 'You can only update your own Posts!'));
    }

    try {
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(updatedPost);
    } catch (error) {
        next(error);
    }
};

export const getPost = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return next(errorHandler(404, 'Post not found!'));
        }
        res.status(200).json(post);
    } catch (error) {
        next(error);
    }
};

export const getPosts = async (req, res, next) => {
    try {
        const limit = parseInt(req.query.limit) || 9;
        const startIndex = parseInt(req.query.startIndex) || 0;
        let sex = req.query.sex;
        let catBreed = req.query.catBreed;

        if(sex === "male" || sex === "female"){
            sex = { $in: [false, true] }
        }

        if(catBreed === "mixed"){
            catBreed = { $in: [false, true] }
        }

        const searchTerm = req.query.searchTerm || '';

        const sort = req.query.sort || 'createdAt';

        const order = req.query.order || 'desc';

        // MongoDB query
        const posts = await Post.find({
            name: { $regex: searchTerm, $options: 'i' },
            $or: [
                { sex: sex },
                { catBreed: catBreed }
            ]
            , $or: [
                { sex: sex },
                { catBreed: { $regex: catBreed, $options: 'i' } }
            ]
            ,$or: [
                { sex: sex || { $exists: true } },
                { catBreed: catBreed || { $exists: true } }
            ]
        })
            .sort({ [sort]: order })
            .skip(startIndex)
            .limit(limit);

        return res.status(200).json(posts);
    } catch (error) {
        next(error);
    }
};