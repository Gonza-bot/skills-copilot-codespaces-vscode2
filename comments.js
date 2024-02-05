// Create web server
const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

// Create data
let comments = [
    {id: 1, author: 'John', message: 'Hello everyone!'},
    {id: 2, author: 'Jane', message: 'Hi, John!'},
    {id: 3, author: 'John', message: 'How are you?'}
];

// Get all comments
app.get('/comments', (req, res) => {
    res.send(comments);
});

// Get a comment
app.get('/comments/:id', (req, res) => {
    const comment = comments.find(c => c.id === parseInt(req.params.id));
    if (!comment) {
        res.status(404).send('The comment with the given ID was not found.');
        return;
    }
    res.send(comment);
});

// Add a comment
app.post('/comments', (req, res) => {
    const comment = {
        id: comments.length + 1,