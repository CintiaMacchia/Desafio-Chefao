require('dotenv').config();

const cloudinary = require('cloudinary');


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});


exports.uploads = (file, foto) => {
    return new Promise(
        (resolve) => {
            cloudinary.uploader.upload(
                file,
                (fotoReturn) => {
                    resolve({
                        imageUrl: fotoReturn.url
                    })
                }, {
                    folder: foto,
                    resource_type: 'auto'
                }

            )
        }
    )
}