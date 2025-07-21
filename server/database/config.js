import mongoose from "mongoose";

export const connectMongoServer = async (url) => {
    const conn = await mongoose.connect(url)
        .then(() => {
            console.log("MongoDB server is connected!!");
        });
    return conn;
}


mongoose.connection.once("connected", ()=>{
    filesBucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, { bucketName: "filesBucket" });
    console.log("filesBucket is created successfully!!");
});

export let filesBucket;

