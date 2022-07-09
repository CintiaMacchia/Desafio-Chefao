require('dotenv').config();

const cloudinary = require('cloudinary');


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});


exports.uploads = (file: any, fotoAnuncio: any) => {
    return new Promise(
        (resolve) => {
            cloudinary.uploader.upload(
                file,
                (fotoReturn: any) => {
                    resolve({
                        imageUrl: fotoReturn.url
                    })
                }, {
                    folder: fotoAnuncio,
                    resource_type: 'auto'
                }
            )
        }
    )
}