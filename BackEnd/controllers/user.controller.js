import bcryptjs from 'bcryptjs';
import Contact from '../models/contact.model.js';
import Post from '../models/post.model.js';
import User from '../models/user.model.js';
import { errorHandler } from "../utils/error.js";

export const test = (req, res) => {
    res.json(
        {
            message: 'Api is work'
        });
}

export const updateUser = async (req, res, next) => {
    if (req.user.id !== req.params.id) return next(errorHandler(401, 'You can only update your own account'));
    try {
        if (req.body.password) {
            req.body.password = bcryptjs.hashSync(req.body.password, 10);
        }

        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                avatar: req.body.avatar,
            }
        }, { new: true });
        const { password, ...rest } = updatedUser._doc;
        res.status(200).json(rest);
    } catch (error) {
        next(error)
    }
};

export const deleteUser = async (req, res, next) => {
    if (req.user.id !== req.params.id)
        return next(errorHandler(401, 'You can only delete your own account!'));
    try {
        await User.findByIdAndDelete(req.params.id);
        res.clearCookie('access_token');
        res.status(200).json('User has been deleted!')
    } catch (error) {
        next(error)
    }
}

export const getUserPost = async (req, res, next) => {
    if (req.user.id === req.params.id) {
        try {
            const post = await Post.find({ userRef: req.params.id });
            res.status(200).json(post);
        } catch (error) {
            next(error);
        }
    } else {
        return next(errorHandler(401, 'You can only view your own Post!'));
    }
};


export const getUserContact = async (req, res, next) => {
    if (req.user.id === req.params.id) {
        try {
            const oldestContact = await Contact.find({ userRef: req.params.id })
                .sort({ createdAt: -1 })
                .limit(1);

            if (oldestContact.length === 0) {
                return res.status(404).json({ message: 'No contact found for the user' });
            }

            const user = await User.findById(req.params.id);
            const result = {
                user: {
                    _id: user._id,
                    name: user.username,
                },
                contact: oldestContact[0],
            };

            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    } else {
        return next(errorHandler(401, 'You can only view your own Contact!'));
    }
};
