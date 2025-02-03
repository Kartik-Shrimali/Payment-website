const express = require('express');
const jwt = require("jsonwebtoken");
const zod = require("zod");
const router = express.Router();
const User = require("../db");
const JWT_SECRET = require("./config");
const authMiddleware = require('../middleware')

const signupSchema = zod.object({
    username: zod.string().email(),
    firstname: zod.string(),
    lastname: zod.string(),
    password: zod.string().min(6, { message: "The password should be of atleast 6 words!!" }),

})

router.post('/signup', async (req, res) => {
    const body = req.body;
    const { success } = signupSchema.safeParse(body);

    if (!success) {
        return res.json({
            msg: "Username already taken/Incorrect inputs"
        })
    }

    const user = await User.findOne({
        username: body.username
    })

    if (user._id) {
        return res.json({
            msg: "Username already taken/ Incorrect Inputs"
        })
    }

    const dbuser = await User.create({
        username: body.username,
        firstname: body.firstname,
        lastname: body.lastname,
        password: body.password
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

const signinSchema = zod.object({
    username: zod.string().email(),
    password: zod.string().min(6, { message: "The password should be of atleast 6 words!!" }),
})

router.post('/signin', async (req, res) => {
    const body = req.body;
    const {success} = signinSchema.safeParse(body);

    if(!success){
        return res.json({
            msg : "Incorrect credentitals!"
        })
    }

    const user = await User.findOne({
        username : body.username,
        password : body.password
    })

    if(user){
        const token = jwt.sign({
            userID : user._id
        } , JWT_SECRET);
        
        return res.json({
            msg: "Logged in successfully",
            token : token
        })
    }

    return res.json({
        msg : "Error while logging in "
    })

})


const updateSchema = zod.object({
    username: zod.string().email().optional(),
    firstname: zod.string().optional(),
    lastname: zod.string().optional()
})


router.put('/changeInfo', authMiddleware , async (req, res) => {
    const body = req.body;
    const {success} = updateSchema.safeParse(body);

    if(!success){
        return res.status(411).json({
            msg : "Error while updating info"
        })
    }

    await User.update({
        id : req.userId
    } , body);

    res.json({
        msg : "Changed information successfully"
    })


})

router.get('/info' , authMiddleware , async(req , res)=>{
    const filter = req.body.filter || "";

    const users = await User.find({
        $or : [{
            firstname : { $regex : filter}
        } , {
            lastname :  { $regex : filter} 
        }]
    })

    if(users){
        res.json({
            users : users.map(user=>({
                firstname : user.firstname,
                lastname : user.lastname,
                username : user.username,
                _id : user._id
            }))
        })
    }

    else{
        res.json({
            msg : "Coudnt find user with the given inputs"
        })
    } 
})

module.exports = {
    router
}