const express = require('express');
const router = express.Router();

// Temporary in-memory storage
let users = [];

// GET all users
router.get('/', (req, res) => {
    res.json(users);
});

// POST user
router.post('/', (req, res) => {
    const data = req.body;
    const newUsers = Array.isArray(data) ? data : [data];
    newUsers.forEach(u => {
        if (!users.find(user => user.id === u.id)) users.push(u);
    });
    res.status(201).json({ message: "Users added", total: users.length });
});

// GET user by ID
router.get('/:id', (req, res) => {
    const user = users.find(u => u.id === req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
});

// UPDATE user
router.put('/:id', (req, res) => {
    const user = users.find(u => u.id === req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    user.name = req.body.name || user.name;
    res.json({ message: "Updated", user });
});

// DELETE user
router.delete('/:id', (req, res) => {
    const idx = users.findIndex(u => u.id === req.params.id);
    if (idx === -1) return res.status(404).json({ message: "Not found" });
    users.splice(idx, 1);
    res.json({ message: "Deleted" });
});

module.exports = router;