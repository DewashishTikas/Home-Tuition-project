import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const vacancySchema = new Schema({
    name: { type: String, require: true, }
}, { timestamps: true });

export default models['Vacancy'] || model('Vacancy', vacancySchema);


