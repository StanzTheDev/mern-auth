import { useState, useEffect } from 'react';
import Pending from '../assets/icons/pending.svg';
import NotStarted from '../assets/icons/notStarted.svg';
import Done from '../assets/icons/done.svg';
import axios from '../utils/axios';
import Delete from '../assets/icons/delete.svg';
import AddIcon from '../assets/icons/addIcon.svg';
import { Container } from 'react-bootstrap';


function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const fetchTasks = async () => {
    try {
      const response = await axios.get('/api/tasks', {
        withCredentials: true
      });
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks', error);
    }
  };

  const addTask = async (e) => {
    e.preventDefault();
    try {
      const formattedDueDate = dueDate ? new Date(dueDate).toISOString() : null;
      const response = await axios.post(
        '/api/tasks',
        { title, description, dueDate: formattedDueDate, status: 'Not Started' },
        { withCredentials: true }
      );
      setTasks((prevTasks) => [...prevTasks, response.data]);
      setTitle('');
      setDescription('');
      setDueDate('');
    } catch (error) {
      console.error('Error adding task', error.response ? error.response.data : error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`/api/tasks/${id}`, {
        withCredentials: true
      });
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error('Error deleting task', error);
    }
  };

  const updateTaskStatus = async (taskId, newStatus) => {
    try {
      const response = await axios.put(`/api/tasks/${taskId}`, 
        { status: newStatus },
        { withCredentials: true }
      );
      
      setTasks(prevTasks => 
        prevTasks.map(task => 
          task._id === taskId ? response.data : task
        )
      );
    } catch (error) {
      console.error('Error updating task status', error);
    }
  };

  const StatusChange = ({ status }) => {
    switch (status) {
      case 'Not Started':
        return <img src={NotStarted} alt="Not Started" className="h-6 w-6 text-gray-400" />;
      case 'Pending':
        return <img src={Pending} alt="Pending" className="h-6 w-6 text-gray-400" />;
      case 'Done':
        return <img src={Done} alt="Done" className="h-6 w-6 text-gray-400" />;                                     
      default:
        return <img src={Pending} alt="Error" className="h-6 w-6 text-gray-400" />;
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <Container>
    <div className=" text-gray-900 mt-6">
      <div className='bg-white shadow-md rounded-md mb-4 md:p-6'>
      <h2 className=" font-bold px-4 pt-3 text-xl md:mb-4 md:text-2xl">Add New Task</h2>
      <form onSubmit={addTask} className="p-4 rounded-md mb-6">
  <input
    type="text"
    placeholder="Task Title"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    className="bg-white border border-gray-900 text-black px-3 py-2 rounded mb-3 w-full sm:w-full md:w-full"
    required
  />
  <textarea
    placeholder="Description"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    className="bg-white border border-gray-900 text-black px-3 py-2 rounded mb-3 w-full"
  />
  <input
    type="date"
    value={dueDate}
    onChange={(e) => setDueDate(e.target.value)}
    className="bg-white border border-gray-900 text-black px-3 py-2 rounded mb-3 w-full"
  />
  <div className="flex">
    <button
      className="bg-black h-15 w-full flex justify-center items-center text-white px-10 py-2 rounded"
      type="submit"
    >
      <img className="mr-2 h-5 w-5" src={AddIcon} alt="Add Icon" />
      Add Task
    </button>
  </div>
</form>
      </div>
      <div className="space-y-4 mb-2">
        {tasks.map((task) => (
          <div key={task._id} className="shadow-md bg-white p-10 rounded-md">
            <h3 className="text-lg font-medium mb-1">{task.title}</h3>
            <p className="text-gray-400 mb-2 md:mb-4">{task.description}</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 items-center">
              <p className="text-gray-500 mb-2 md:text-base col-span-2 sm:col-span-1">Due: {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'No due date'}</p>
      
              <div className="flex items-center space-x-2 col-span-1">
                <label className="text-gray-400 mr-2 md:text-base text-sm">Status</label>
                <select
                  value={task.status}
                  onChange={(e) => updateTaskStatus(task._id, e.target.value)}
                  className="text-gray-700 border-2 border-gray-500 rounded text-sm md:px-3 md:py-1 md:text-base"
                >
                  <option value="Not Started">Not Started</option>
                  <option value="Pending">Pending</option>
                  <option value="Done">Done</option>
                </select>
                <StatusChange status={task.status} />
              </div>
              <div className="md:flex justify-end items-center col-span-2 sm:col-span-1">
  <button
    onClick={() => deleteTask(task._id)}
    className=" border border-gray-700 hover:bg-gray-100 flex justify-center items-center h-8 w-8 rounded"
  >
    <img
      className="h-4 w-4"
      src={Delete}
      alt="Delete Icon"
    />
  </button>
</div>


            </div>
            </div>
          
        ))}
      </div>
    </div>
    </Container>
  );
}

export default TaskManager;