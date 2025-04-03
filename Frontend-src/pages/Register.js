import React, { useState } from "react";
import axios from "../services/api";
function Register() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/register", form);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Username" onChange={(e) => setForm({ ...form, username: e.target.value })} />
      <input placeholder="Email" type="email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input placeholder="Password" type="password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <button type="submit">Register</button>
    </form>
  );
}
export default Register;