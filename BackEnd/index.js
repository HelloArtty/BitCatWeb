import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
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

const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.use("/backend/user", userRouter)