import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const fileSchema = new Schema({
    bufferData: Buffer,
    size: Number,
    mimetype: String,
    encoding: String,
    fieldName: String,
},
    { timestamps: true });

export default models['File'] || model('File', fileSchema);