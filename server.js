//Load express module with `require` directive
var express = require('express');
var app = express();
var path = require('path');

//Define request response in root URL (/)
app.use(express.static("public"));

//Launch listening server on port 8081
app.listen(8081, function () {
  console.log('app listening on port 8081!')
});
