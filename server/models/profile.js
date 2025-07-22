import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const profileSchema = new Schema({
    userName: {type: String, require: true},
    email: {type: String, require: true},
    resumeId: {type: String, require: true},
    linkedInUrl: {type: String, require: false},
    phoneNo: {type: String, require: true},
});

export default models["Profile"] || model("Profile", profileSchema);
