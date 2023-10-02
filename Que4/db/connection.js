const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTION_STRING)
.then(()=>{
    console.log('Connection done');
})
.catch((err)=>console.log(err));