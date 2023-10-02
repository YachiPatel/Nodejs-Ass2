const router = require('express').Router();
const authController = require('../controllers/auth');
const studentController = require('../controllers/student');
const jwt = require('jsonwebtoken');

const verifyUser = (req,res,next)=>{
    const token = req.cookies.jwt;
    if(!token)
    {
        res.redirect('/login');
    }
    
    jwt.verify(token,'helloWorld',(err,decode)=>{
        if(err)
        {
            res.redirect('/login');
        }
        req.userId = decode.userId;
        next();
    })
}

router.get('/login',authController.viewLogin);
router.post('/login',authController.login);
router.get('/logout',authController.logout);
router.get('/students',verifyUser,studentController.viewStudents);
router.get('/createStudent',verifyUser,studentController.createStudent);
router.post('/createStudent',verifyUser,studentController.addStudent);
router.get('/deleteStudent/:id',verifyUser,studentController.deleteStudent);
router.get('/editStudent/:id',verifyUser,studentController.editStudent);
router.post('/editStudent/:id',verifyUser,studentController.updateStudent);

module.exports = router;