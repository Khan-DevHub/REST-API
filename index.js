const express = require('express');
const app = express();
const userRoutes = require('./routes/users');

// Middleware
app.use(express.json());

// Routes
app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Server is running!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});   