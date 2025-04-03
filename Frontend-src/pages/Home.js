import React, { useEffect, useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([]); // Ensure blogs is an array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/getData")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setBlogs(data);
        } else {
          setError("Invalid data format received.");
        }
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch blogs.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading blogs...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container">
      <h1>Blog Posts</h1>
      {blogs.length === 0 ? (
        <p>No blogs available.</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog._id} className="blog-card">
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
