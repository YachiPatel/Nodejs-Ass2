const express=require("express");
const app=express();
const path = require('path');

const port=process.env.port||3000;

require('./config/conn');

app.use(express.urlencoded({extended:false}));
app.use("/",require("./routes/router"));
app.set("view engine","ejs");

// Public folder ne static karva mate
const staticPath = path.join(__dirname,"/public/");
app.use(express.static(staticPath));

// app.get('/',(req,res)=>{
//     res.send('hello');
// })

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})