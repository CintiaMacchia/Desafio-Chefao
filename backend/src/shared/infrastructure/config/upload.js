const multer = require('multer');
const path = require('path');
const fs = require('fs');

const pathImageFolder =  path.join('src/public', 'images');
const storage = multer.diskStorage({
    destination: function(req: Request, file: any, cb: any) {
       if(!fs.existsSync(pathImageFolder)){
        fs.mkdirSync(pathImageFolder, {recursive : true})
       }
        cb(null, pathImageFolder)
         
    },
    filename: function(req: Request, file: any, cb: any) {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

const upload = multer({
    storage: storage
});

export default upload;