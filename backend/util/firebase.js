const admin = require("firebase-admin");
const serviceAccount = require("./firebase.json");
const saltedMd5=require('salted-md5')
const path=require('path');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: process.env.BUCKET_URL
});

const uploadFileToFirebaseStorage = file => {
    const bucket = admin.storage().bucket(process.env.BUCKET_URL);
    const name = saltedMd5(file.originalname, 'SUPER-S@LT!')
    const fileName = name + path.extname(file.originalname);
    console.log(file);
    return bucket.file(fileName).createWriteStream().end(file.buffer);
}

module.exports = {
    uploadFileToFirebaseStorage
}
