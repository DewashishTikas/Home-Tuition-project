import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const applySchema = new Schema({
    name: { type: String, require: true },
    fatherName: { type: String, require: true },
    motherName: { type: String, require: true },
    DOB: { type: String, require: true },
    mobileNum: { type: String, require: true },
    mobileNumAlt: { type: String, require: false },
    emailId: { type: String, require: true },
    qualification: { type: String, require: true },
    category: { type: String, require: true },
    mpDomicile: { type: String, require: true },
    address: { type: String, require: true },
    referenceName: { type: String, require: false },
    question: { type: String, require: true },
    post: { type: String, require: true },
    signatureId: { type: String, require: true },
    photoId: { type: String, require: true },
    resumeId: { type: String, require: true },
    marksheetId: { type: String, require: true },
}, { timestamps: true });

export default models['Applications'] || model('Applications', applySchema);