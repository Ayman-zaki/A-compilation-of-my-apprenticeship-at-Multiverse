//initializing and storing express in a variable
const express = require("express");
const Image = require('ascii-art-image');

const app = express();

// a function that uploads the image
const userUpload = require("../routes/index");



//a middleware that handles the user route
app.use("/user", userUpload);

//assigning the localhost:8080 to a variable
const port = 8080;

// a callback function that shows if the server is running or not
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
