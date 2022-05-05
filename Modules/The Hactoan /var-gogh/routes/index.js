const express = require("express");

const { upload, uploadImage, printAscii } = require("../controllers/userController");

const router = express.Router();




// post request to localhost:3000/user/upload, body form-data, key photo (dropdown choose file)
router.post("/upload", uploadImage, upload, printAscii);

module.exports = router;
