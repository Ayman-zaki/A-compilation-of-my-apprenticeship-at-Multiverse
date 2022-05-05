//importing multer from the library

const multer = require("multer");

//Using multer to upload file

let fileName;

const multerConfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "client/public/images/");
  },

  filename: (req, file, callback) => {
    const ext = file.mimetype.split("/")[1];
    const imageName = `image-${Date.now()}.${ext}`
    fileName = imageName
    callback(null, imageName);

  },
});

var Image = require('ascii-art-image');


const isImage = (req, file, callback) => {
  if (file.mimetype.startsWith("image")) {
    callback(null, true);
  } else {
    callback(new Error("Only Image is Allowed.."));
  }
};

const upload = multer({
  storage: multerConfig,
  fileFilter: isImage,
});


exports.uploadImage = upload.single("photo");

exports.upload = (req, res, next) => {
  console.log(req.file);
next()
};

exports.printAscii = (req,res) =>{
  
  var image = new Image({
    filepath: `./client/public/images/${fileName}`,
    alphabet:'variant4'
});

let ascii;

image.write(function(err, rendered){
   ascii = rendered; 
    console.log(rendered);
    res.status(200).json({
      success: "Success!",
      rendered
    });
})

}


