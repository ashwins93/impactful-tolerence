const Project = require('../models/project');

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find(
      {},
      { name: 1, status: 1 },
    );
    res.json(projects);
  } catch (err) {
    res.json({ message: err.message });
  }
};

const addProject = async (req, res) => {
  try {
    const created = await Project.create(req.body);
    res.json(created);
  } catch (err) {
    res.json({ message: err.message });
  }
};

const getProject = async (req, res) => {
  try {
    const project = await Project.findById(
      req.params.id,
      { _id: 0 },
    ).populate('timeline').exec();
    res.json(project);
  } catch (err) {
    res.json({ message: err.message });
  }
};

const updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
    );
    res.json(project);
  } catch (err) {
    res.json({ message: err.message });
  }
};

const deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndRemove(req.params.id);
    res.end();
  } catch (err) {
    res.json({ message: err.message });
  }
};

module.exports = {
  getProjects,
  addProject,
  getProject,
  updateProject,
  deleteProject,
};
