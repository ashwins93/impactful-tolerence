const Log = require('../models/log');
const Project = require('../models/project');

const addLog = async (req, res) => {
  try {
    const created = await Log.create(req.body);
    const project = await Project.findById(req.params.pid);
    project.timeline.push(created);
    await project.save();
    res.json(project);
  } catch (err) {
    res.json({ message: err.message });
  }
};

const updateLog = async (req, res) => {
  try {
    const updated = await Log.findByIdAndUpdate(
      req.params.id,
      req.body,
    );
    res.json(updated);
  } catch (err) {
    res.json({ message: err.message });
  }
};

const deleteLog = async (req, res) => {
  try {
    await Log.findByIdAndRemove(req.params.id);
    res.end();
  } catch (err) {
    res.json({ message: err.message });
  }
};

module.exports = {
  addLog,
  updateLog,
  deleteLog,
};
