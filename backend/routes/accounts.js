const express = require("express");
const router = express.router();
const authMiddleware = require("../middleware")

router.get('/balance', authMiddleware, async (req, res) => {
    let id = req.body.userId;

    const AccountUser = await Account.find({
        Userid: id
    })

    if (AccountUser) {
        return res.json({
            balance: Account.balance
        })
    }

    else{
        return res.json({
            msg : "Coudnt fetch balance"
        })
    }
})

router.post('/transfer', authMiddleware, async (req, res) => {

})

module.exports = {
    router
}  