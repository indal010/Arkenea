var express = require("express");
const router = express.Router();
expressValidator = require("express-validator");
var userService = require("../services/user.service");
var multer  = require('multer');
 
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      console.log(file);
      var filetype = '';
      
      if(file.mimetype === 'image/png') {
        filetype = 'png';
      }
      if(file.mimetype === 'image/jpeg') {
        filetype = 'jpg';
      }
      cb(null, 'image-' + Date.now() + '.' + filetype);
    }
});
 
var upload = multer({storage: storage});
//router.use(expressValidator());
router.post("/",upload.single('file'), userService.createUser);
router.get("/", userService.get);
router.get("/:id", userService.getById);
router.post("/update",upload.single('file'), userService.update)
router.delete("/:id", userService.delete);
router.post("/search", userService.getByName)
module.exports = router;
 
 
 


