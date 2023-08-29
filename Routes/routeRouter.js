const express = require('express');
const router = express.Router();
const Route = require("../Model/route"); 

// POST API for creating a route
router.post("/routes", async (req, res) => {
  try {
    const newRoute = new Route(req.body);
    const savedRoute = await newRoute.save();
    res.json(savedRoute);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET API for retrieving route details
router.get('/routes/:id', async (req, res) => {
  try {
    const route = await Route.findById(req.params.id);
    if (route === null) {
      return res.status(404).json({ message: 'Route not found' });
    }
    res.json(route);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
