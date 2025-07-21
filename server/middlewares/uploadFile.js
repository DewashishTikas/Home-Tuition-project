import { MulterError } from "multer";
import multerUpload from "../services/multer.js";

export const uploadFiles = (fieldNames) => {
    try {
        console.log(fieldNames, typeof(fieldNames));
        let upload = multerUpload.none();
        if(Array.isArray(fieldNames)){
            const fields = fieldNames.map((fieldName)=>{
                return {name: fieldName, maxCount: 1};
            });
            upload = multerUpload.fields(fields);
        }
        else if(typeof(fieldNames) === "string"){
            upload = multerUpload.single(fieldNames);
        }
        return (req, res, next) => {
              upload(req, res, (err)=>{
                if(err instanceof MulterError){
                    console.error("multer error:/n", err);
                    return res.status(500).json({message: 'Failed to save uploaded files. Please try agian later!!'});
                }
                else if (err) {
                    console.error("unknown error:/n", err);
                    return res.status(500).json({message: 'Failed to save uploaded files. Please try agian later!!'});
                }
                next();
              })
        }
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({error: "Failed to save uploaded files. Please try agian later!!"});
    }
}