import mongoose from "mongoose";

const locationSchema = new mongoose.Schema(
    {
        location: {
            type: String,
            required: true,
        },
        userRef: {
            type: String,
            required: true,
        },
    }, { timestamps: true }
    );

const Location = mongoose.model('Location', locationSchema);

export default Location;