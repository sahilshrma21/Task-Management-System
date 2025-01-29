// import React, { useEffect, useState } from "react";
// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./"
// import Add from "./components/AddTask";
// import Navabr from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
// import List from "./components/TaskList";
// import Login from "./pages/Login";

// const App = () => {
//   const [token, setToken] = useState(
//     localStorage.getItem("token") ? localStorage.getItem("token") : ""
//   );

//   useEffect(() => {
//     localStorage.setItem("token", token);
//   }, [token]);

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <ToastContainer />
//       {token === "" ? (
//         <Login setToken={setToken} />
//       ) : (
//         <>
//           <Navabr setToken={setToken} />
//           <hr />
//           <div className="flex w-full">
//             <Sidebar />
//             <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
//               {/* Wrap Routes inside Router */}
//               <Router>
//                 <Routes>
//                   <Route path="/add" element={<Add token={token} />} />
//                   <Route path="/list" element={<List token={token} />} />
//                 </Routes>
//               </Router>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default App;

import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import TaskDescription from './pages/TaskDescription';
import TaskList from './pages/TaskList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/task/:id" element={<TaskDescription />} />
      </Routes>
    </Router>
  );
};

export default App;

