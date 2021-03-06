class userService {
    constructor(userRepository, bcrypt, loginHelper) {
        this.userRepository=userRepository;
        this.bcrypt = bcrypt;
        this.loginHelper = loginHelper;
    }

    add = async (req) => {
        const existingUser = await this.userRepository.find({where: {mail:req.body.mail}})
        if(existingUser.length !== 0){
            return {status: "USER_ALREADY_EXISTS", "message": "The User already exists"};
        }
        const hashPassword = await this.bcrypt.hash(req.body.password, 10);
        let user=await this.userRepository.add({
            password: hashPassword,
            mail: req.body.mail
        });
        
        return user;
    }

    login = async (req, res) => {
        const user = await this.userRepository.findOne({where: {mail: req.body.mail}});
        let userLoged;
        if(user){
            userLoged = await this.loginHelper.verifyPassword(user, req);
        } else {
            userLoged = {status: 'LOGIN_WRONG', message: 'User or password wrong', httpCode: 401};
        }
        return userLoged;
    }
}

module.exports = userService;