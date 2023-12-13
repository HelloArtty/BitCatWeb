import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";


export const signup = async(req, res, next) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });

    try {
        await newUser.save();
        res.status(201).json({ success: true, message: 'User created successfully' });
    } catch (error) {
        if (error.code === 11000) {
            let duplicateField;
            if (error.message.includes('username')) {
                duplicateField = 'Username';
            } else if (error.message.includes('email')) {
                duplicateField = 'Email';
            }
            return res.status(400).json({ success: false, message: `${duplicateField} is already taken.` });
    }}
        next(error);
    };

export const signin = async(req, res, next) => {
    const { username, password } = req.body;
    try{
        const validUser = await User.findOne({ username });
        if (!validUser) return next(errorHandler(404, 'User not found'));
        const validPassword = bcrypt.compareSync(password, validUser.password);
        if (!validPassword) return next(errorHandler(401, 'Enter the wrong password!'));
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
        const { password: pass, ...rest} = validUser._doc;
        res
        .cookie('access_token', token, { httpOnly: true })
        .status(200)
        .json(rest);
    } catch(error){
        next(error);
    }
};