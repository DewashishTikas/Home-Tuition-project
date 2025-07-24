import { Writable } from "stream"

class writeMongoFile extends Writable {
    constructor(options) {
        super(options);
        this.bufferData = Buffer.from("");
        this.model = options.model;
        this.docId = undefined;
        this.dataSize = 0;
        this.metaData = options.metaData;
    }

    _write(chunk, encoding, callback) {
        if (encoding != "buffer") callback(new Error("Chunk should be of type buffer!!"))
        this.bufferData = Buffer.concat([this.bufferData, chunk]);
        callback();
    }

    _final(callback) {
        if (!this.model) callback(new Error("Mongoose model is missing!!"));

        let thisScope = this;
        const metaData = this.metaData;
        console.log(metaData);
        this.model.create({
            fieldName: metaData.fieldname,
            encoding: metaData.encoding,
            mimetype: metaData.mimetype,
            bufferData: this.bufferData,
            size: Buffer.byteLength(thisScope.bufferData)
        })
            .then(function (doc) {
                thisScope.docId = doc.id;
                thisScope.dataSize = doc.size;
                callback();
            })
            .catch((err) => callback(err));
    }
}

function MongoFileStorageEngine(opts) {
    this.getDestination = opts.mongoModel;
    // this.limits = opts.limits;
}

MongoFileStorageEngine.prototype._handleFile = function _handleFile(req, file, cb) {
    this.getDestination(req, file, function (err, model) {
        if (err) return cb(err);

        try {
            // const outStream = bucket.openUploadStream(file.originalname);
            const outStream = new writeMongoFile({ model: model, metaData: file })

            file.stream.pipe(outStream);
            outStream.on('error', cb);
            outStream.on('finish', function () {
                cb(null, {
                    id: outStream.docId,
                    size: outStream.dataSize,
                });
            });
        }
        catch (err) {
            console.error(err);
            cb(err);
        }
    });
}

MongoFileStorageEngine.prototype._removeFile = function _removeFile(req, file, cb) {
    this.getDestination(req, file, function (err, model) {
        if (err) return cb(err);

        model.findByIdAndDelete(file.id)
            .then(() =>{ cb(); console.log("file is deleted") })
            .catch((err) => {
                console.error(err);
                cb(err);
            });
    });
}

function mongoFileStorage(opts) {
    return new MongoFileStorageEngine(opts);
}

export default mongoFileStorage;