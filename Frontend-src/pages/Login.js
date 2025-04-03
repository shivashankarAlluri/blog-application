import React, { useState } from "react";
import axios from "../services/api";
function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("/login", form);
    document.cookie = `token=${res.data.token}`;
  };
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Email" type="email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input placeholder="Password" type="password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <button type="submit">Login</button>
    </form>
  );
}
export default Login;
