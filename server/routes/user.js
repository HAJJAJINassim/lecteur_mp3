const express = require("express");
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const UserModel=require('../models/UserModel');
const router = express.Router();


var url = "mongodb://localhost:27017/Music";
mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology:true});
var db = mongoose.connection;

router.post("/register",(req,res)=>{
    const user = new UserModel( {
        name:req.body.name,
        email:req.body.email,
        password:bcrypt.hashSync(req.body.password, 10)
    });
    user.save(function(err){
        if(err) {
            console.log(err);
            res.status("400").json({type:"registring",msg:"failed"});
           
        }else{
            res.status("200").json({type:"registring",msg:"success"});
        }
        
    })
});
router.post("/login",function(req,res){

    UserModel.findOne({email:req.body.email},function(err,user){
        if (err){

            res.status("400").json({type:"server",msg:"failed"});
        }
        else{
            if(user){
                 // compare password
                bcrypt.compare(req.body.password,user.password,function(err,resp){
                    if(err) console.log(err);
                    if(resp){
                        // generate a jwt
                        console.log(user);
                        var token = jwt.sign(user.toJSON(),'keyword'); // the keyword must be in a different file and do not commit it 
                        res.status("200").json({type:"login","msg":"success","token":token})
                    }else{
                        res.status("201").json({type:"login","msg":"password doesnt match"});
                    }
                })
            }else{
                res.status("401").json({type:"login","msg":"user not found"})
            }

        }
           
        
    })
})

module.exports=router;