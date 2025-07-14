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
    anyQuestion: { type: String, require: true },
    selectedVacancy: { type: String, require: true },
    signatureUrl: { type: String, require: true },
    photoUrl: { type: String, require: true },
    resumeUrl: { type: String, require: true },
    marksheet: { type: String, require: true },
});

export default models['Apply'] || model('Apply', applySchema);