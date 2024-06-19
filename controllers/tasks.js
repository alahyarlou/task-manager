const Task = require('../model/task');

// ~ get all tasks
const getAllTask = async (req, res) => {
    const alltasks = await Task.find()
    try {
        return res.status(200).json({ message: 'get all tasks', data: alltasks })
    } catch (error) {
        return res.status(500).json({ message: error.message, data: null })
    }
}

// ~ create new task
const createTask = async (req, res) => {
    const task = new Task({
        title: req.body.title,
        description: req.body.description,
        author: req.body.author,
    })

    try {
        const newTask = await task.save()
        return res.status(201).json({ message: "add task successfully!", data: newTask })

    } catch (error) {
        return res.status(500).json({ message: error.message, data: null })
    }
}

// ~ get single task with id
const getTask = async (req, res) => {
    const taskId = req.params.id
    try {
        const getTask = await Task.findById(taskId)
        if (getTask) {
            return res.status(200).json({ message: `find task id:${taskId}`, data: getTask })
        } else {
            return res.status(404).json({ message: `not found task id ${taskId}`, data: null })
        }
    } catch (error) {
        return res.status(500).json({ message: error.message, data: null })
    }
}

// ~ update task with id
const updateTask = async (req, res) => {
    const taskId = req.params.id
    const updateTaskSchema = req.body
    try {
        const getTask = await Task.findById(taskId)
        if (getTask) {
            // Update the task with the new data
            Object.assign(getTask, updateTaskSchema);
            await getTask.save();

            return res.status(200).json({ message: `Task with id ${taskId} updated successfully`, data: getTask });
        } else {
            return res.status(404).json({ message: `not found task id ${taskId}`, data: null })
        }
    } catch (error) {
        return res.status(500).json({ message: error.message, data: null })
    }
}


// ~ delete task with id
const deleteTask = async (req, res) => {
    const taskId = req.params.id

    try {
        const deleteTask = await Task.findByIdAndDelete(taskId)
        if (deleteTask) {
            return res.status(200).json({ message: `Task with id ${taskId} updated successfully`, data: deleteTask });
        } else {
            return res.status(404).json({ message: `not found task id ${taskId}`, data: null })
        }
    } catch (error) {
        return res.status(500).json({ message: error.message, data: null })
    }
}


module.exports = { getAllTask, createTask, getTask, updateTask, deleteTask }