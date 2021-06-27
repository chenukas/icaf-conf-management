const multer=require('multer');
const upload = multer({storage: multer.memoryStorage()});
const fileController = require('../controllers/file.controller');

const router = require('express').Router();
router.post('/files', upload.single('file'), fileController.fileUploadHandler);

module.exports = router;
