const router = require('express').Router();
const fs=require('fs');
const multer=require('multer');

const storage=multer.diskStorage({
	destination:function(req,file,cb){
		cb(null,'./public/uploads')
	},
	filename: function (req, file, cb) {
          var fileFormat = (file.originalname).split(".");
          cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
      }
});
//var storage = multer.memoryStorage()
const upload=multer({storage:storage});
router.post('/',upload.single('file'), function(req, res, next) {
	//debug(req.file.buffer);
	res.setHeader("Access-Control-Allow-Origin", "*"); 
    let pathold =req.file.path.replace(/\\/g,"/");
    let path =pathold.replace(/public\//,"");
    console.log(pathold);
    console.log(path);
	console.log(req.file);
	res.json({"url":path});
  /*Article.find().distinct('tagList').then(function(tags){
    return res.json({tags: tags});
  }).catch(next);*/
});

module.exports = router;