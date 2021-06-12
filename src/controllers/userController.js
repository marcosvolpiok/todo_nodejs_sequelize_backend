class userController{
  constructor(userService) {
    this.userService=userService;
  }

  add = async (req, res) => { 
    try{
      const user=await this.userService.add(req);
      res.json(user);
    }catch(e){
      res.status(500).json({message: e.message})
    }
  }

  login = async (req, res) => { 
    try{
      const user=await this.userService.login(req);
      res.json(user);
    }catch(e){
      res.status(500).json({message: e.message})
    }
  } 
}


module.exports = userController;