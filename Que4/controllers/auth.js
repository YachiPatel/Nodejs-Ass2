const express = require('express');
const Users = require('../model/userModel');
const secretKey = "helloWorld";
const jwt = require('jsonwebtoken');

const viewLogin = (req,res)=>{
    res.render('login');
} 

const login = async (req,res)=>{
    try{
        const result = await Users.findOne({email:req.body.email,Password:req.body.password});
        if(result != null) 
        {
            const token = jwt.sign({userId : result._id},secretKey,{expiresIn:'1h'});
            res.cookie('jwt',token);
            res.send(true);
        }
        else
        {
            res.send(false);
        }
    }
    catch(err)
    {
        res.send(false);
        console.log(err);
    }
}

const logout = (req,res)=>{
    res.clearCookie('jwt');
    res.redirect('login');
}

module.exports = {
    viewLogin,
    login,
    logout
}