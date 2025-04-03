const express = require('express');
const Blog = require('../models/Blog');
const router = express.Router();

// Create a new blog post
router.post("/post", async (req, res) => {
    try {
      const { title, content } = req.body;
  
      // Check if title and content are provided
      if (!title || !content) {
        return res.status(400).json({ error: "Title and content are required" });
      }
  
      // Example: Save to MongoDB (adjust based on your DB)
      const newPost = new BlogModel({ title, content });
      await newPost.save();
  
      res.status(201).json({ message: "Blog created successfully" });
    } catch (error) {
      console.error("Error creating post:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
// Get all blog posts
router.get('/getData', async (req, res) => {
    try {
        const blogs = await Blog.find().populate('userId', 'username');
        res.json(blogs);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update a blog post
router.put('/update/:id', async (req, res) => {
    try {
        const user = req.user;
        const { title, content } = req.body;
        
        const blog = await Blog.findById(req.params.id);

        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        if (blog.userId.toString() !== user._id.toString()) {
            return res.status(403).json({ message: "Unauthorized! You can only update your own blog" });
        }

        const updatedBlog = await Blog.findByIdAndUpdate(
            req.params.id,
            { title, content },
            { new: true } 
        );

        res.json(updatedBlog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


// Delete a blog post
router.delete('/delete/:id', async (req, res) => {
    try {
        const user = req.user;
        
        const blog = await Blog.findById(req.params.id);

        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        if (blog.userId.toString() !== user._id.toString()) {
            return res.status(403).json({ message: "Unauthorized! You can only Delete your own blog" });
        }

        await Blog.findByIdAndDelete(req.params.id);
        res.json({ message: 'Blog post deleted' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
