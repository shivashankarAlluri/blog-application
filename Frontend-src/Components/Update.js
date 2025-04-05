import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await fetch("http://localhost:5000/getData", {
        credentials: "include",
      });
      const data = await res.json();
      const blog = data.find((b) => b._id === id);
      if (blog) {
        setTitle(blog.title);
        setContent(blog.content);
      }
    };
    fetchBlog();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:5000/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ title, content }),
    });
    const data = await res.json();
    if (res.ok) {
      alert("Blog updated successfully");
    } else {
      alert(data.message || "Failed to update");
    }
  };

  return (
    <div>
      <h2>Update Blog</h2>
      <form onSubmit={handleUpdate}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required /><br />
        <textarea value={content} onChange={(e) => setContent(e.target.value)} required></textarea><br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Update;