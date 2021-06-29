const firebase = require('../util/firebase');

const fileUploadHandler = async (req, res, next) => {
    const {file} = req;
    if (!file) {
        return res.status(400).json({ error: 'File not found'});
    }

    try {
        const result = await firebase.uploadFileToFirebaseStorage(file);
        return res.status(200).json(result);
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: err.message
        });
    }
}

module.exports = {
    fileUploadHandler
}
