class TaskService {
  constructor(taskRepository) {
    this.taskRepository=taskRepository;
  }

  list = async () => {
    const tasks=await this.taskRepository.list();
    return tasks;
  }

  add = async (req) => {
    const task=await this.taskRepository.add(req);
    return task;
  }
}

module.exports = TaskService;