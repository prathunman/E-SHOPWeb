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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentState === "Register") {
      if(!user.name && !user.email && !user.password){
        toast.error('Please fill all the fields');
      } else {
        localStorage.setItem('user', JSON.stringify(user));
        toast.success('User registered successfully');
        setCurrentState('Login');
      }
    } else if (currentState === "Login") {
      const data = JSON.parse(localStorage.getItem('user'));
      if (data.email === user.email && data.password === user.password) {
        toast.success('User logged in successfully');
        setIsLogin(true);
        navigate('/')
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
                    <p className="block text-grsy-700">Name</p>
                    <input type="name" className="w-full px-3 py-2 border" placeholder="Enter your name" onChange={(e) => setUser({ ...user, name: e.target.value })} />
                  </div>
                </>
              )}

              <div className="mb-4">
                <p className="block text-grsy-700">Email</p>
                <input type="email" value={user.email} className="w-full px-3 py-2 border" placeholder="Enter your email" onChange={(e) => setUser({ ...user, email: e.target.value })} />
              </div>
              <div className="mb-4">
                <p className="block text-grsy-700">Password</p>
                <input type="password" className="w-full px-3 py-2 border" placeholder="Enter your password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
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
                  <button className="text-blue-500 hover:underline" onClick={() => setCurrentState('Register')}>Register</button>
                </p>)
              ) : (
                <p>
                  Already have an account?
                  <button className="text-blue-500 hover:underline" onClick={() => setCurrentState('Login')}>Login</button>
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
