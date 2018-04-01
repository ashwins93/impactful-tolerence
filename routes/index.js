const express = require('express');
const projects = require('./projects');
const logs = require('./logs');

const router = express.Router();

router.route('/projects')
  .get(projects.getProjects)
  .post(projects.addProject);

router.route('/projects/:id')
  .get(projects.getProject)
  .put(projects.updateProject)
  .delete(projects.deleteProject);

router.route('/logs/:pid')
  .post(logs.addLog);

router.route('/logs/:id')
  .put(logs.updateLog)
  .delete(logs.deleteLog);

module.exports = router;
