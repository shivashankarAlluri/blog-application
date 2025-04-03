import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../services/api";
function EditBlog() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: "", content: "" });
  
  useEffect(() => {
    axios.get(`/blog/${id}`).then((res) => setForm(res.data));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`/update/${id}`, form);
    navigate(`/blog/${id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
      <textarea value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })}></textarea>
      <button type="submit">Update</button>
    </form>
  );
}
export default EditBlog;