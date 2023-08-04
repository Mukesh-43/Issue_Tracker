const express = require('express');
const router = express.Router();

const projectsController = require('../controllers/projects_Controller');

router.post('/create', projectsController.create_project);

router.post('/created',projectsController.project_created)

module.exports = router; 