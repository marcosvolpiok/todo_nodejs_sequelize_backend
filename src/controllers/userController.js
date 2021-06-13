class userController{
  constructor(userService) {
    this.userService=userService;
  }

  add = async (req, res) => { 
    try{
      const user=await this.userService.add(req);
      return res.json(user);
    }catch(e){
      res.status(500).json({message: e.message})
    }
  }

  login = async (req, res) => { 
    try{
      const user=await this.userService.login(req);      
      return res.status(user.httpCode).send(user);
    }catch(e){
      res.status(500).json({message: e.message})
    }
  } 
}


module.exports = userController;