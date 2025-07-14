import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const contactSchema = new Schema({
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    phoneno: { type: String, require: true },
    email: { type: String, require: true },
    message: { type: String, require: true },
});

export default models['Contact'] || model('Contact', contactSchema);