// components/TaskDetails.js
import React from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../Actions/taskActions';

const TaskDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const task = useSelector((state) => state.tasks.find((t) => t.id === id));
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      dispatch(deleteTask(id));
      history.push('/');
    }
  };

  if (!task) {
    return <p>Task not found</p>;
  }

  return (
    <>
    <section className='bg-black h-screen text-white bg-gradient-to-b from-[#0d0d0d] to-[#181818] flex items-center justify-center p-5'>
      <div className='mx-16 pt-10 w-auto  h-auto text-center justify-center  bg-white text-black rounded-2xl  shadow md:shadow-lg xs:w-full xs:mx-2'>
      <h2 className='mt-5 text-3xl text-[#6A64F1]'>Task Details</h2>
        <div className='m-4 h-full'>
          <div className='flex flex-col text-start mb-8'>
            <span className='text-1xl font-bold text-red-600'>Task Title : </span>
          <h3 className='text-1xl font-bold'>{task.title}</h3>
          </div>
          <div className='flex flex-col text-start mb-8'>
            <span className='text-1xl font-bold text-red-600'>Task Date : </span>
          <p className='text-1xl font-bold'>{task.dueDate}</p>
          </div>
          <div className='flex flex-col text-start mb-8'>
            <span className='text-1xl font-bold text-red-600'>Task Description : </span>
          <p className='text-1xl font-bold'>{task.description}</p>
          </div>
          
          <div className='flex justify-between align-middle mt-12 xs:flex-col ' >
            <div >
            <button style={{alignItems:"center"}} className='hover:shadow-form w-50  flex h-4 rounded-md bg-[#6A64F1] py-5 px-8 text-center text-base font-semibold text-white outline-none xs:w-60 xs:justify-center xs:mb-3' onClick={handleDelete}>Delete</button>
            </div>
            <div>
            <Link to={`/edit/${id}`}>
              <button style={{alignItems:"center"}} className='hover:shadow-form w-50 flex h-4 rounded-md bg-[#6A64F1] py-5 px-8 text-center text-base font-semibold text-white outline-none xs:w-60 xs:justify-center xs:mb-3'>Edit</button>
            </Link>
            </div>
            <div>
            <Link to="/">
              <button style={{alignItems:"center"}} className='hover:shadow-form w-50 flex h-4 rounded-md bg-[#6A64F1] py-5 px-8 text-center text-base font-semibold text-white outline-none xs:w-60 xs:justify-center xs:mb-3'>Back to Task List</button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default TaskDetails;
