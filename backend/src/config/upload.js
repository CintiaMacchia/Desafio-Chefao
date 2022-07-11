const multer = require('multer');
const path = require('path');
const fs = require('fs');

const pathImageFolder = path.join('src/public', 'images');
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        if (!fs.existsSync(pathImageFolder)) {
            fs.mkdirSync(pathImageFolder, { recursive: true })
        }
        cb(null, pathImageFolder)

    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

const upload = multer({
    storage: storage
});

module.exports = upload;