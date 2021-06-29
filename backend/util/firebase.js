const admin = require("firebase-admin");
const serviceAccount = require("./firebase.json");
const saltedMd5=require('salted-md5')
const path=require('path');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: process.env.BUCKET_URL
});

/**
 * Upload file to firebase storage
 * @param file - file to be uploaded
 */
const uploadFileToFirebaseStorage = file => {
    return new Promise((resolve, reject) => {
        const bucket = admin.storage().bucket(process.env.BUCKET_URL);
        // create unique name
        const name = saltedMd5(file.originalname, '1wqsadzx@31');
        const fileName = name + path.extname(file.originalname);

        const blob = bucket.file(fileName);
        const writeStream = blob.createWriteStream();

        writeStream.on('error', err => reject(err));
        writeStream.on('finish', async data => {
            const publicURL = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
            try {
                await bucket.file(fileName).makePublic();
            } catch (err) {
                reject(err);
            }
            resolve({publicURL, path: fileName});
        });
        writeStream.end(file.buffer);
    });
}

module.exports = {
    uploadFileToFirebaseStorage
}
