const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const verifyPassword = async (user, req)=>{
    const result = await bcrypt.compare(req.body.password, user.password);
    if(result){
        return {...getToken(user), httpCode: 200};
    }else{
        return {status: 'LOGIN_WRONG', message: 'User or password wrong', httpCode: 401};
    }
}


const getToken = (user) =>{
    const token = jwt.sign({
            mail: user.mail,
            idUser: user.id
        },
        process.env.JWT_KEY,
        { expiresIn: "3h" }
    );
        
    return {
        message: "Auth successful",
        token : token
    };
    
}


module.exports = {verifyPassword, getToken};