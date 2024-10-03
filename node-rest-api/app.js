const express = require('express');

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Sample in-memory data store
let items = [];
let currentId = 1;

// Create: Add a new item
app.post('/items', (req, res) => {
  const newItem = { id: currentId++, ...req.body };
  items.push(newItem);
  res.status(201).json(newItem);
});

// Read: Get all items
app.get('/items', (req, res) => {
  res.json(items);
});

// Read: Get an item by ID
app.get('/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).send('Item not found');
  res.json(item);
});

// Update: Update an item by ID
app.put('/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).send('Item not found');

  Object.assign(item, req.body);
  res.json(item);
});

// Delete: Remove an item by ID
app.delete('/items/:id', (req, res) => {
  const itemIndex = items.findIndex(i => i.id === parseInt(req.params.id));
  if (itemIndex === -1) return res.status(404).send('Item not found');

  const deletedItem = items.splice(itemIndex, 1);
  res.json(deletedItem);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
