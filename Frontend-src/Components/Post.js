import React, { useState } from "react";

const Post = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ title, content }),
    });
    const data = await res.json();
    if (res.ok) {
      alert("Blog created successfully");
      setTitle("");
      setContent("");
    } else {
      alert(data.message || "Failed to create blog");
    }
  };

  return (
    <div>
      <h2>Create Blog</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required /><br />
        <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} required></textarea><br />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default Post;