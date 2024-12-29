import React, { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Login = ({setToken}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(backendUrl + "/api/user/admin", {
        email,
        password,
      });
    //   console.log(response);

    if(response.data.success){
         setToken(response.data.token)
    } else {
        toast.error(response.data.message)
                      
    }
    } catch (error) {
        console.log(error);
        toast.error(error.message)

    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Admin Panel
        </h1>
        <form action="" onSubmit={onSubmitHandler}>
          <div className="mb-5">
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Email Address
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="rounded-md w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              type="email"
              placeholder="your@email.com"
              required
            />
          </div>
          <div className="mb-5">
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="rounded-md w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white font-medium py-2 rounded-md transition duration-150"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
