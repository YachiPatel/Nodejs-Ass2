const express = require('express');
const Students = require('../model/studentModel');

const viewStudents = async (req, res) => {
    const students = await Students.find();
    res.render('students', {
        students: students
    });
}

const createStudent = (req, res) => {
    res.render('createStudent');
}

const addStudent = async (req, res) => {
    try {
        const student = new Students({ name: req.body.name, age: req.body.age, DOB: req.body.DOB, course: req.body.course });

        const result = await student.save();

        if (result) {
            res.redirect("/students");
        }
    }
    catch (err) {
        console.log(err);
    }
}

const deleteStudent = async (req, res) => {
    try {
        const _id = req.params.id;

        const result = await Students.findOneAndDelete({ _id });
        if (result) {
            res.redirect('/students');
        }
    }
    catch (err) {
        console.log(err);
    }
}

const editStudent = async (req, res) => {
    try {
        const _id = req.params.id;

        const student = await Students.find({ _id });

        if (student) {
            res.render('editStudent', { student: student });
        }
    }
    catch (err) {
        console.log(err);
    }
}

const updateStudent = async(req,res)=>{
    try{
        const _id = req.params.id;

        const result = await Students.findOneAndUpdate({_id},{$set:{name:req.body.name,age:req.body.age,DOB:req.body.DOB,course:req.body.course}},{new:true});

        if(result)
        {
            res.redirect('/students');
        }
    }
    catch(err)
    {
        console.log(err);
    }
}
module.exports = {
    viewStudents,
    createStudent,
    addStudent,
    deleteStudent,
    editStudent,
    updateStudent
}