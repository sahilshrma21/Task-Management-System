import React from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/"
          element={
            <div>
              <h1>Welcome! Please login or register.</h1>
              <p>
                <Link to="/login">Login</Link> or <Link to="/register">Register</Link>
              </p>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;