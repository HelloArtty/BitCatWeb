import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
    {
        phone: {
            type: String,
            required: true,
        },
        userRef: {
            type: String,
            required: true,
        },
    }, { timestamps: true }
    );
    

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;

