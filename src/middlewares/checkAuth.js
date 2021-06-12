const jwt = require('jsonwebtoken');

module.exports = (req,res,next)=>{
    try {
        if(req.headers.authorization.split(" ").length>1){
            const token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_KEY);
            res.userData = decoded;
        }else{
            res.status(401).json({message : "Auth failed"});
        }
        next();
    } catch (error) {
        res.status(401).json({message : "Auth failed"});
    }
}