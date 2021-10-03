import TaskService from "../services/taskService.js"

class TaskController{

    async addTask(req, res){
        try{
            let task = await TaskService.addTask(req.body);
            await res.status(200).json(task);
        }catch (err) {
            res.status(409).json("Request is wrong");
        }
    };


    async getTasks(req, res){
        try{
            let tasks = await TaskService.getAllTasks();
            await res.status(200).json(tasks);
        }catch (err){
            res.status(409).json("Request is wrong");
        }
    };


    async updateTask(req, res){
        try{
            let task = await TaskService.updateTask(req.params.id, req.body);
            await res.status(200).json(task);
        }catch (err){
            res.status(409).json("Request is wrong");
        }
    };


    async deleteTasks(req, res){
        try{
            let task = await TaskService.deleteTask(req.params.id);
            await res.status(200).json(task);
        }catch (err){
            res.status(409).json("Request is wrong");
        }
    };

}

export default new TaskController();