// create web server
import { Router } from 'express';
const router = Router();

import Comment, { find } from '../models/Comment';

// create comment
router.post('/:postId', async (req, res) => {
    const postId = req.params.postId;
    const comment = new Comment({
        postId: postId,
        name: req.body.name,
        content: req.body.content
    });
    try {
        const savedComment = await comment.save();
        res.json(savedComment);
    } catch (err) {
        res.json({ message: err });
    }
});

// get comments
router.get('/:postId', async (req, res) => {
    try {
        const postId = req.params.postId;
        const comments = await find({ postId: postId });
        res.json(comments);
    } catch (err) {
        res.json({ message: err });
    }
});

export default router;