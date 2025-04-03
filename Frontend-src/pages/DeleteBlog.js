import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../services/api";
function DeleteBlog() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  useEffect(() => {
    axios.get(`/blog/${id}`).then((res) => setBlog(res.data));
  }, [id]);

  const handleDelete = async () => {
    await axios.delete(`/delete/${id}`);
    navigate("/");
  };

  if (!blog) return <p>Loading...</p>;
  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
      <button onClick={() => navigate(`/edit/${id}`)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
export default DeleteBlog;