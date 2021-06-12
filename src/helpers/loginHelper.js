const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const verifyPassword = async (user, req)=>{
    const result = await bcrypt.compare(req.body.password, user.password);
    if(result){
        return getToken(user);
    }else{
        return {status: 'LOGIN_WRONG', message: 'Password or mail wrong'};
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