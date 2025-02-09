const express = require("express");
const mongoose = require("mongoose");
const AccountRouter = express.Router();
const {authMiddleware} = require("../middleware");
const {Account} = require("../db")

AccountRouter.get('/balance', authMiddleware, async (req, res) => {
    let id = req.body.Userid;

    const AccountUser = await Account.findOne({
        Userid: id
    })

    if (AccountUser) {
        return res.json({
            balance: AccountUser.balance
        })
    }

    else{
        return res.json({
            msg : "Coudnt fetch balance"
        })
    }
})

AccountRouter.post('/transfer', authMiddleware, async (req, res) => {
    const session = await mongoose.startSession();

    session.startTransaction();

    const ReceiverId = req.body.id;
    const amount = req.body.amount;
    const Userid = req.body.Userid;

    const account = await Account.findOne({Userid : Userid }).session(session);

    if(!account){
        await session.abortTransaction();
        return res.json({
            msg : "Your account does not exist !"
        })
    }

    if(account.balance < amount)
    {
        await session.abortTransaction();
        return res.json({
            msg : "You have insufficient balance!!!"
        })
    }

    const Receiver = await Account.findOne({
        Userid : ReceiverId
    }).session(session);

    if(!Receiver){
        await session.abortTransaction();
        return res.json({
            msg : "The person you are trying to send money doesm't exist !!"
        })
    }

    await Account.updateOne({ Userid : Userid} , {$inc : {balance : -amount}} , {session});
    await Account.updateOne({ Userid : ReceiverId} , {$inc : {balance : amount}} , {session});

    await session.commitTransaction();
    res.json({
        msg : "Transfer Successful",
    })

})

module.exports ={AccountRouter};  