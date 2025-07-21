import mongoose from "mongoose";

const {Schema, model, models} = mongoose;

const fileSchema = new Schema({
    bufferData: Buffer,
});

export default models['File'] || model('File', fileSchema);