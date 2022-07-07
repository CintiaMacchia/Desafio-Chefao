const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination: function(req: Request, file: any, cb: any) {
        cb(null, path.join('src/public', 'images'))
    },
    filename: function(req: Request, file: any, cb: any) {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

const upload = multer({
    storage: storage
});

export default upload