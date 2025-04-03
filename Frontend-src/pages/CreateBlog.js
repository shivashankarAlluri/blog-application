import React, { useState } from "react";
import axios from "../services/api";
function CreateBlog() {
  const [form, setForm] = useState({ title: "", content: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/post", form);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Title" onChange={(e) => setForm({ ...form, title: e.target.value })} />
      <textarea placeholder="Content" onChange={(e) => setForm({ ...form, content: e.target.value })}></textarea>
      <button type="submit">Create</button>
    </form>
  );
}
export default CreateBlog;