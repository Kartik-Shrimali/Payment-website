const express = require('express');
const jwt = require("jsonwebtoken");
const zod = require("zod");
const router = express.Router();
const User = require("../db");
const JWT_SECRET = require("./config");

const signupSchema = zod.object({ 
    username : zod.string().email(),
    firstname : zod.string(),
    lastname : zod.string(),
    password : zod.string().min(6 , {message : "The password should be of atleast 6 words!!"}),

})

router.post('/signup' , async(req , res)=>{
    const body = req.body;
    const {success} = signupSchema.safeParse(body);

    if(!success){
        return res.json({
            msg : "Username already taken/Incorrect inputs"
        })
    }

    const user =  await User.findOne({
        username : body.username
    })

    if(user._id)
    {
        return res.json({
            msg: "Username already taken/ Incorrect Inputs"
        })
    }

    const dbuser = await User.create({
        username : body.username,
        firstname : body.firstname,
        lastname : body.lastname,
        password : body.password
    });

    const userId = user._id;
    let token = jwt.sign({
        userId
    }, JWT_SECRET)

    res.json({
        msg: "User created successfully",
        token: token
    })

})

router.post('/signin' , (req , res)=>{
    
})

router.put('/changepassword' , (req , res)=>{
    
})

module.exports = {
    router
}