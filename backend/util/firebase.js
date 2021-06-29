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
    const bucket = admin.storage().bucket(process.env.BUCKET_URL);
    // create unique name
    const name = saltedMd5(file.originalname, '1wqsadzx@31');
    const fileName = name + path.extname(file.originalname);
    return bucket.file(fileName).createWriteStream().end(file.buffer);
}

module.exports = {
    uploadFileToFirebaseStorage
}
