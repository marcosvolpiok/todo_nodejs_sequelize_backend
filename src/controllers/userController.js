class userController{
  constructor(userService) {
    this.userService=userService;
  }

  list = async (req, res) => { 
    try{
      const user=await this.userService.list();
      res.json(user);
    }catch(e){
      res.status(500).json({message: e.message})
    }
  }

  listByIdUser = async (req, res) => { 
    try{
      const user=await this.userService.listByIdUser(req);
      res.json(user);
    }catch(e){
      res.status(500).json({message: e.message})
    }
  }

  add = async (req, res) => { 
    try{
      const user=await this.userService.add(req);
      res.json(user);
    }catch(e){
      res.status(500).json({message: e.message})
    }
  }  

  update = async (req, res) => { 
    try{
      const user=await this.userService.update(req);
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