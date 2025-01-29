import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
// import backendUrl from "../App.jsx";

const TaskList = () => {
 const [list ,setList] = useState([]);

 const fetchlist = async () => {
try {
  const response = await axios.get("http://localhost:4000/api/tasks/tasklist" , {headers:{token:localStorage.getItem('token')}});

  if(response.data.success){
    setList(response.data.tasks);
  }  else{
    toast.error(response.data.error);
    console.log(response.data.error);
  }
} catch (error) {
  toast.error(error.message);
  
} 
}

const deleteTask = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:4000/api/tasks/deletetask/${id}`,{headers:{token:localStorage.getItem('token')}});
    if(response.data.success){
      toast.success(response.data.message);
      fetchlist();
    } else {
      toast.error(response.data.error);
    }
  } catch (error) {
    console.log(error.message);
    toast.error(error.message);
  }
}


useEffect(() => {
  fetchlist();
}
, []);

  return (
    < >
      <h2 className="text-xl font-bold">Task List</h2>
    <div className="flex flex-col gap-4">
      {/* List Table Title   */}
      <div className='hidden md:grid grid-cols-[1fr_3rf_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm '>
        <b>Task Title</b>
        <b>Description</b>
        <b>Assigned To</b>
        <b>Due Date</b>
        <b>Status</b>
        <b className="text-center">Action</b>
        
{/* product List  */}
{
  list.map((item,index)=> {
    <div className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm" key={index}>
      <p>{item.title}</p>
      <p>{item.description}</p>
      <p>{item.assignedTo}</p>
      <p>{item.status}</p>
      <p className="text-right md:text-cneter cursor-pointer text-lg" onClick={deleteTask}>X</p>
      </div>
  })
}

      </div>

    </div>
    </>
  );
};

export default TaskList;
