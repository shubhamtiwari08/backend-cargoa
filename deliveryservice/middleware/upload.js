const path       = require('path')
const multer     = require('multer')


var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'uploads/')
    },
    filename:function(req,file,cb){
        let ext = path.extname(file.originalname)
        cb(null,Date.now() + ext)
    }
})

var upload = multer({
    storage:storage,
    fileFilter:function(req,file,cb){
        if(
            file.mimetype == 'application/pdf'
        ){
            cb(null,true)
        }else{
            console.log('only pdf allowed')
            cb(null,false)
        }
    }
})

module.exports = upload