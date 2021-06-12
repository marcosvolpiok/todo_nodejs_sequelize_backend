class userService {
    constructor(userRepository, bcrypt, loginHelper) {
        this.userRepository=userRepository;
        this.bcrypt = bcrypt;
        this.loginHelper = loginHelper;
    }

    add = async (req) => {
        const existingUser = await this.userRepository.find({where: {mail:req.body.mail}})
        if(existingUser.length !== 0){
            return {status: "USER_EXISTS", "message": "The User exists"};
        }
        const hashPassword = await this.bcrypt.hash(req.body.password, 10);
        let user=await this.userRepository.add({
            password: hashPassword,
            mail: req.body.mail
        });
        
        delete user.mail;
        console.log('xxx');
        return user;
    }

    login = async (req, res) => {
        const user = await this.userRepository.findOne({where: {mail: req.body.mail}});
        let userLoged;
        if(user){
            userLoged = await this.loginHelper.verifyPassword(user, req);
        } else {
            userLoged = {status: 'USER_DOESNT_EXISTS', message: 'Usuario o contraseña incorrecto'};
        }
        return userLoged;
    }
}

module.exports = userService;