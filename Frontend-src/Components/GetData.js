import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GetData = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch("http://localhost:5000/getData", {
        credentials: "include",
      });
      const data = await res.json();
      if (res.ok) setBlogs(data);
      else alert("Failed to fetch blogs");
    };
    fetchBlogs();
  }, []);

  return (
    <div>
      <h2>All Blogs</h2>
      {blogs.map((blog) => (
        <div key={blog._id}>
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
          <Link to={`/update/${blog._id}`}>Edit</Link> | <Link to={`/delete/${blog._id}`}>Delete</Link>
        </div>
      ))}
    </div>
  );
};

export default GetData;