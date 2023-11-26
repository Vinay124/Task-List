// components/TaskForm.js
import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, updateTask } from '../Actions/taskActions';

const TaskForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const tasks = useSelector((state) => state.tasks);
  const existingTask = tasks.find((task) => task.id === id);

  const [title, setTitle] = useState(existingTask ? existingTask.title : '');
  const [description, setDescription] = useState(existingTask ? existingTask.description : '');
  const [dueDate, setDueDate] = useState(existingTask ? existingTask.dueDate : '');

  const handleSubmit = (e) => {
    e.preventDefault();

    const task = { id: existingTask ? existingTask.id : new Date().getTime().toString(), title, description, dueDate };

    if (existingTask) {
      dispatch(updateTask(task));
    } else {
      dispatch(addTask(task));
    }

    history.push('/');
  };

  useEffect(() => {
    if (existingTask) {
      setTitle(existingTask.title);
      setDescription(existingTask.description);
      setDueDate(existingTask.dueDate);
    }
  }, [existingTask]);

  return (
    <>
    <section className='bg-black h-screen text-white bg-gradient-to-b from-[#0d0d0d] to-[#181818] flex items-center justify-center p-5'>
        <div className='mx-auto w-1/3 xs:w-full h-auto text-center justify-center  bg-white text-black rounded-2xl  shadow md:shadow-lg '>
      <div className='mb-4 mx-16 pt-10 xs:mx-6'>
      <h2 className='mt-3 text-3xl text-[#6A64F1]'>{existingTask ? 'Edit Task' : 'Create Task'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
        <div className='flex flex-col text-start mb-8'>
          <label className='block text-gray-700 text-1xl font-bold mb-2 '>Title:</label>
          <input type="text" className='shadow appearance-none border rounded-xl w-full text-lg font-semibold py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " id="username" type="text' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter Task Name' required />
        </div>
        <div className='flex flex-col text-start mb-8'>
          <label className='block text-gray-700 text-1xl font-bold mb-2'>Due Date:</label>
          <input type="date" className='shadow appearance-none border rounded-xl w-full py-3 text-lg font-semibold px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text' value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
        </div>
        </div>
       <div>
       <div className='flex flex-col text-start mb-6'>
          <label className='block text-gray-700 text-1xl font-bold mb-2'> Description:</label>
          <textarea className='resize-none rounded-xl shadow appearance-none border  w-full font-semibold text-lg py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text' placeholder='Enter Task Description' value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div className='flex text-center justify-center mb-5'>
        <button className='hover:shadow-form w-50 rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none' type="submit" style={{alignItems:'center'}}>{existingTask ? 'Update' : 'Create'}</button>
        </div>
       </div>
      </form>
      <Link  to="/">
        <button className='hover:shadow-form w-50 rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none'>
        Cancel
        </button>
      </Link>
      
    </div>
        </div>
    </section>


    
    </>
  );
};

export default TaskForm;
