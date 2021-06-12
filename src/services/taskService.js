class TaskService {
  constructor(taskRepository) {
    this.taskRepository=taskRepository;
  }

  list = async () => {
    const tasks=await this.taskRepository.list();
    return tasks;
  }

  add = async (req, res) => {
    const task=await this.taskRepository.addWithUser(req, res);
    return task;
  }
}

module.exports = TaskService;