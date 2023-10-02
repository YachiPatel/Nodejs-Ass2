const user=require("../model/userModel");

const viewRegister=(req,res)=>{
    res.render('register');
}
const register=async(req,res)=>{

    const images = req.files;
    const data=await new user({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        mobile:req.body.mobile,
        //image nu name store karva mate req.file.filename
        image:images.map(file=>file.filename)
    });
    data.save();
    res.send('Submitted');

}
module.exports={viewRegister,register}