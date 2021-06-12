class taskController{
    constructor(taskService) {
        this.taskService=taskService;
    }

    list = async (req, res) => {
        try{
            const tasks=await this.taskService.list();
            res.json(tasks);
        }catch(e){
            res.status(500).json({message: e.message})
        }
    }

    add = async (req, res) => {
        try{
            const task=await this.taskService.add(req.body);
            res.json(task);
        }catch(e){
            res.status(500).json({message: e.message})
        }
    }
}

module.exports = taskController;