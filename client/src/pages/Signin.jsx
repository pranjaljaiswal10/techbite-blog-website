import { useState } from "react";
import { BASE_URL } from "../utils/constant";

const Signin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${BASE_URL}/users/login`, {
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
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Enter email"
        id="email"
        value={formData.email}
        onChange={(e) =>
          setFormData({ ...formData, [e.target.id]: e.target.value })
        }
      />
      <input
        type="password"
        placeholder="Enter password"
        id="password"
        value={formData.password}
        onChange={(e) =>
          setFormData({ ...formData, [e.target.id]: e.target.value })
        }
      />
      <button type="Submit">login</button>
    </form>
  );
};

export default Signin;
