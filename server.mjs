import express from 'express';

const app = express();
const PORT = 3000;

// Route to handle API requests
app.use('/api/user/', (req, res) => {
  res.status(200).json({ message: 'Server created successfully' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
