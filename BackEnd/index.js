import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import authRouter from './routes/auth.route.js';
import contactRouter from './routes/contact.route.js';
import locationRouter from './routes/location.route.js';
import postRouter from './routes/post.route.js';
import userRouter from './routes/user.route.js';
dotenv.config();

// Connect to DB
mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log('Error connecting to MongoDB', err);
    });

    const _dirname = path.resolve();

const app = express();

app.use(express.json());

app.use(cookieParser());

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.use("/backend/user", userRouter)
app.use("/backend/auth", authRouter)
app.use("/backend/post", postRouter)
app.use("/backend/contact", contactRouter)
app.use("/backend/location", locationRouter)


app.use(express.static(path.join(_dirname, '/frontend/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(_dirname, 'frontend','dist','index.html'));
});

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success : false,
        statusCode,
        message,
    });
});