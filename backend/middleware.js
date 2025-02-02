const jwt = require("jsonwebtoken");
const JWT_SECRET = require("./config");


function authMiddleware(req , res , next){
    authHeader = req.header.authHeader;

    if(!authHeader.startsWith("Bearer")){
        res.Status(401).json({
            msg : "Unauthorised"
        })
    }

    const token = authHeader.split(" ",1);

    try{
        const decoded = jwt.verify(token , JWT_SECRET);

        if(decoded.userId){
            req.userId = decoded.userId;
            next();
        }
        else{
            res.Status(403).json({
                msg: "Unauthorised access"
            })
        }
    }catch(err){
        return res.Statur(403).json({
            msg : "Unauthorised access"
        })
    }
}

module.exports = {
    authMiddleware
};