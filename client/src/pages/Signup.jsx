import { useState } from "react";
import { BASE_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data);
  };
  return (
    <div className="grid grid-cols-2 items-center  h-[600px] ">
      <div className="space-y-2 max-w-72 justify-self-center">
        <h1 className="text-3xl font-semibold">Create an account</h1>
        <p>
          Already have an account?
          <Link to="/signin" className="underline">
            Login
          </Link>{" "}
        </p>
        <form onSubmit={(e) => handleSubmit(e)} className="space-y-6">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            className="w-full p-1 outline-gray-400 outline-1 rounded-md"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.id]: e.target.value })
            }
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="me@example.com"
            className="w-full p-1 outline-gray-400 outline-1 rounded-md"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.id]: e.target.value })
            }
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            className="w-full p-1 outline-gray-400 outline-1 rounded-md"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.id]: e.target.value })
            }
          />
          <button className="bg-black text-white w-full  px-4 rounded-md py-2">
            create an account
          </button>
        </form>
      </div>
      
      <div className=" bg-slate-200 h-screen flex flex-col justify-center items-center">
      <div className="w-3/4 space-y-3">
        <p className="font-bold text-2xl leading-8 ">
          &quot;The customer service I received was exceptional.The suypport
          team went above and beyond to address my concerns.&quot;
        </p>
        <span className="font-bold">Jules Winnifield</span>
        <small className="block text-gray-600 font-semibold">
          CEO,Acme Inc
        </small>
        </div>
      </div>
    </div>
  );
};

export default Signup;
