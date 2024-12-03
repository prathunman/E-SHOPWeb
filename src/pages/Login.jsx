import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { setIsLogin } = useContext(AuthContext);

  const navigate = useNavigate();

  const validateFields = () => {
    if (currentState === "Register") {
      if (!user.name.trim()) {
        toast.error("Name is required");
        return false;
      }
    }
    if (!user.email.trim()) {
      toast.error("Email is required");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user.email)) {
      toast.error("Invalid email format");
      return false;
    }
    if (!user.password.trim() || user.password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return false;
    }
    return true;
  };

  const resetForm = () => {
    setUser({
      name: "",
      email: "",
      password: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateFields()) return;

    if (currentState === "Register") {
      localStorage.setItem('user', JSON.stringify(user));
      setCurrentState('Login');
      resetForm();
    } else if (currentState === "Login") {
      const data = JSON.parse(localStorage.getItem('user'));
      if (data.email === user.email && data.password === user.password) {
        setIsLogin(true);
        navigate('/')
        resetForm();
      } else {
        toast.error('Invalid credentials');
      }
    } else {
      return toast.error('Something went wrong');
    }
  };

  return (
    <div className="min-h-[25vh]">
      <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
        <div className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
          <NavLink to={'/'} className="absolute top-4 right-4 text-3xl text-gray-400">&times;</NavLink>
          <div>
            <h2 className="text-2xl font-bold mb-4">{currentState}</h2>
            <form>
              {currentState === "Login" ? (
                ""
              ) : (
                <>
                  <div className="mb-4">
                    <p className="block text-grsy-700">Name<sup className="text-red">*</sup></p>
                    <input type="name" className="w-full px-3 py-2 border" placeholder="Enter your name" onChange={(e) => setUser({ ...user, name: e.target.value })} />
                  </div>
                </>
              )}

              <div className="mb-4">
                <p className="block text-grsy-700">Email<sup className="text-red">*</sup></p>
                <input type="email" value={user.email} className="w-full px-3 py-2 border" placeholder="Enter your email" onChange={(e) => setUser({ ...user, email: e.target.value })} />
              </div>
              <div className="mb-4">
                <p className="block text-grsy-700">Password<sup className="text-red">*</sup></p>
                <input type="password" value={user.password} className="w-full px-3 py-2 border" placeholder="Enter your password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
              </div>
              <div className="mb-4 flex items-center justify-center">
                <div className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" placeholder="Enter your password" />
                  <span className="ml-2 text-gray-700">Remember Me</span>
                </div>
                <div className="ml-2">
                  <Link to={"/forget"} className="text-blue-500 hover:underline ">
                    forgot password?
                  </Link>
                </div>
              </div>
              <div className="mb-4">
                <button type="submit" className="w-full bg-red-600 text-white py-2" onClick={handleSubmit}>
                  {currentState}
                </button>
              </div>
            </form>
            <div className="text-center">
              {currentState === "Login" ? (
                (<p>
                  Don't have an account?
                  <button className="text-blue-500 hover:underline ml-2" onClick={() => setCurrentState('Register')}>Register</button>
                </p>)
              ) : (
                <p>
                  Already have an account?
                  <button className="text-blue-500 hover:underline ml-2" onClick={() => setCurrentState('Login')}>Login</button>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
