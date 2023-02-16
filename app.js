// set up
const express = require('express')
const app = express()
const port = 3000
// use express-fileupload package
const fileUpload = require('express-fileupload');
app.use(fileUpload());

// serve static assets from the 'public' directory
app.use(express.static('public'))

// get file upload from POST and send response as JSON
app.post('/api/fileanalyse', function(req, res){
  res.json({"name":req.files.upfile.name, "type":req.files.upfile.mimetype, "size":req.files.upfile.size });
});

// listen for requests
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})