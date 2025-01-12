import Task from '../models/taskModel.js';
import asyncHandler from 'express-async-handler';

// Create a new task
export const createTask = asyncHandler( async (req, res) => {
  try {
    const { title, description, dueDate, status, priority } = req.body;
    
    const newTask = new Task({
      user: req.user._id,
      title,
      description,     
      dueDate,
      status,
      priority
    });

    const task = await newTask.save();
    res.status(201).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error creating task' });
  }
});

// Get all tasks for a user
export const getTasks = asyncHandler ( async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error fetching tasks' });
  }
});

// Update a task
export const updateTask =asyncHandler( async (req, res) => {
  try {
    const { title, description, dueDate, status, priority } = req.body;
    
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      { 
        title, 
        description, 
        dueDate, 
        status, 
        priority 
      },
      { new: true }
    );

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error updating task' });
  }
});

// Delete a task
export const deleteTask =asyncHandler( async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ 
      _id: req.params.id, 
      user: req.user.id 
    });

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.json({ message: 'Task removed' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error deleting task' });
  }
});