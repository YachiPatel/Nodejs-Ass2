const router=require("express").Router();
const userController=require("../controller/userController");


const multer = require('multer');
const storage = multer.diskStorage({
    destination:(req,file,res)=>{
        
        res(null,"../Que1/public/uploads");
    },
    filename:(req,file,res)=>{
        res(null,Date.now()+"-"+file.originalname);
    }
});
const upload = multer({storage:storage});
router.get("/",userController.viewRegister);

router.post("/register",upload.array('image',10),userController.register);
module.exports=router;