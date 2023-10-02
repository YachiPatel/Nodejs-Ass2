const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
      name:{
        type: String,
        required: true
      },
      age:{
        type: Number,
        required:true,
        minlength : 1
      },
      DOB:{
        type:Date,
        required:true
      },
      course:{
        type:String,
        required:true
      }
});

const studentModel = new mongoose.model("Student",studentSchema);

module.exports = studentModel;