// import express from 'express';

// const app = express();
// const PORT = 3000;

// // Route to handle API requests
// app.use('/api/user/', (req, res) => {
//   res.status(200).json({ message: 'Server created successfully' });
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is listening on http://localhost:${PORT}`);
// });


const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 5000;

app.use(cors());

app.use(express.json());

// Simulated database (array of objects)
let items = [
    { id: 1, name: 'Joe Biden',email:"joebiden@gmail.com" },
    { id: 2, name: 'John', email:"john@gmail.com"}
];


// GET all items
app.get('/api/items', (req, res) => {    
  res.json(items);
});

// GET item by ID
app.get('/api/items/:id', (req, res) => {

    const item = items.find(i => i.id === parseInt(req.params.id));
    if (item) {
        res.json(item);
    } else {

        res.status(404).json({ message: 'Item not found' });

    }
});

// POST - Add a new item
app.post('/api/items', (req, res) => {
    const newItem = { id: items.length + 1, name: req.body.name, email: req.body.email };
    items.push(newItem);
    res.status(201).json(newItem);
});

// PUT - Update an item by ID
app.put('/api/items/:id', (req, res) => {
    const item = items.find(
        i => i.id === parseInt(req.params.id));
    if (item) {
        item.name = req.body.name;
        item.email = req.body.email;
        res.json(item);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

// DELETE - Remove an item by ID
app.delete('/api/items/:id', (req, res) => {
    items = items.filter(i => i.id !== parseInt(req.params.id));

    res.status(204).send();
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});