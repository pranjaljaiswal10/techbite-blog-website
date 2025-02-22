import { useState } from "react";
import { BASE_URL } from "../utils/constant";

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
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Enter username"
        value={formData.username}
        onChange={(e) =>
          setFormData({ ...formData, [e.target.id]: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Enter fullname"
        value={formData.fullname}
        onChange={(e) =>
          setFormData({ ...formData, [e.target.id]: e.target.value })
        }
      />
      <input
        type="email"
        placeholder="Enter email"
        value={formData.email}
        onChange={(e) =>
          setFormData({ ...formData, [e.target.id]: e.target.value })
        }
      />
      <input
        type="password"
        placeholder="Enter password"
        value={formData.password}
        onChange={(e) =>
          setFormData({ ...formData, [e.target.id]: e.target.value })
        }
      />
      <button>create an account</button>
    </form>
  );
};

export default Signup;
