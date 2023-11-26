// components/TaskList.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../Actions/taskActions';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (taskId) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      dispatch(deleteTask(taskId));
    }
  };

  return (
    <>
    <section className='bg-black h-screen text-white bg-gradient-to-b from-[#0d0d0d] to-[#181818] flex items-center justify-center p-5'>
      <div className='mx-auto w-full max-w-[550px] h-2/4 text-center justify-center  bg-white text-black rounded-2xl  shadow md:shadow-lg'>
      <div className='m-5 flex justify-around'>
        <Link to="/create">
        <button className='hover:shadow-form w-50 rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none'>Create Task</button>
        </Link>
      </div>
      <div className='mx-6'>
        <h1 className='text-left mx-3 text-2xl font-semibold text-[#6A64F1]'>Created Tasks</h1>
        {tasks.map((task) => (
        <div key={task.id} className='existingtask flex items-center align-baseline justify-between mx-3 text-xl align-items-center mt-3'>
          <h3 className='text-1xl font-bold '>{task.title}</h3>
          <button className='hover:shadow-form w-50 rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none'>
          <Link to={`/task/${task.id}`}>Details</Link>
          </button>
        </div>
      ))}
      </div>
      </div>
    </section>
  </>
  );
};

export default TaskList;
