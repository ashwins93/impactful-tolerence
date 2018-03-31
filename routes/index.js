const express = require('express');

const router = express.Router();
const Project = require('../models/project');

router.get('/', (req, res) => {
  res.json({ message: 'Hello, world' });
});

router.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find({}, { name: 1, status: 1 });
    res.json(projects);
  } catch (err) {
    res.json({ message: err.message });
  }
});

router.get('/projects/:id', async (req, res) => {
  try {
    const project = await Project.find({ _id: req.params.id }, { _id: 0 });
    res.json(project);
  } catch (err) {
    res.json({ message: err.message });
  }
});

router.post('/projects', async (req, res) => {
  const { name, status = null, startedOn } = req.body;
  const project = { name, status, startedOn };
  try {
    const created = await Project.create(project);
    res.json(created);
  } catch (err) {
    res.json({ message: err.message });
  }
});

module.exports = router;
