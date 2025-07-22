import { Writable } from "stream"

class writeMongoFile extends Writable {
    constructor(options) {
        super(options);
        this.bufferData = Buffer.from("");
        this.model = options.model;
        this.docId = undefined;
        this.dataSize = 0;
    }

    _write(chunk, encoding, callback) {
        if (encoding != "buffer") callback(new Error("Chunk should be of type buffer!!"))
        this.bufferData = Buffer.concat([this.bufferData, chunk]);
        callback();
    }

    _final(callback) {
        if (!this.model) callback(new Error("Mongoose model is missing!!"));

        let thisScope = this;
        this.model.create({ bufferData: this.bufferData })
            .then(function (doc) {
                thisScope.docId = doc.id;
                thisScope.dataSize = Buffer.byteLength(thisScope.bufferData);
                callback();
            })
            .catch((err) => callback(err));
    }
}

function MongoFileStorageEngine(opts) {
    this.getDestination = opts.mongoModel;
}

MongoFileStorageEngine.prototype._handleFile = function _handleFile(req, file, cb) {
    this.getDestination(req, file, function (err, model) {
        if (err) return cb(err);

        try {

            // const outStream = bucket.openUploadStream(file.originalname);
            const outStream = new writeMongoFile({ model: model })

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
        if(err) return cb(err);

        try {
            model.findByIdAndDelete(file.id);
            cb();
        }
        catch (err) {
            console.error(err);
            cb(err);
        }
    });
}

function mongoFileStorage(opts) {
    return new MongoFileStorageEngine(opts);
}

export default mongoFileStorage;