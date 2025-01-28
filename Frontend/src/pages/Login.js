import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/Login.css";
import { toast } from "react-toastify";

const Login = ({setToken}) => {
 const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const onSubmitHandler = async (e) => {

try { e.preventDefault();
  const response = await axios.post('http://localhost:5000/api/auth/login', {email,password});

  if(response.data.token){
    setToken(response.data.token);
  }else{
    toast.error(response.data.error);
  }}catch (error) {
    console.error(error);
    toast.error('An error occurred' + error.message);
  }
 

}
const navigate = useNavigate();

  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2 className="auth-title">Login</h2>
        <form onSubmit={onSubmitHandler} className="auth-form">
          <div className="form-group">
            <label className="form-label">Username</label>
            <input
              type="text"
              name="username"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <button type="submit" className="auth-button">
            Login
          </button>
        </form>
        <p className="auth-footer">
          Don't have an account?{" "}
          <button onClick={goToRegister} className="signup-link">
            Signup
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
