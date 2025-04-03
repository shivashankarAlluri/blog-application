const express = require('express');
const Comment = require('../models/Comment');
const router = express.Router();

router.post('/commentBlog/:blogId', async (req, res) => {
    try {
        const { content } = req.body;
        const user=req.user;
        const newComment = new Comment({ blogId: req.params.blogId, userId:user._id, content });
        await newComment.save();
        res.status(201).json(newComment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all comments for a blog post
router.get('/allcomments/:blogId', async (req, res) => {
    try {
        const comments = await Comment.find({ blogId: req.params.blogId }).populate('userId', 'username');
        res.json(comments);
    } catch (error) {
        res.status(400).json({ message:error.message });
    }
});

module.exports = router;