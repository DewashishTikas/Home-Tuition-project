import { MulterError } from "multer";
import upload from "../services/multer.js";

export const uploadFiles = (fieldNames) => {
    const fields = fieldNames.map((fieldName)=>{
        return {name: fieldName, maxCount: 1};
    });
    console.log(fieldNames);
    return (req, res, next) => {
          const uploadAll = upload.fields(fields);
          uploadAll(req, res, (err)=>{
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