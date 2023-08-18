const express = require('express');
const router = express.Router();

const projectsController = require('../controllers/projects_Controller');

router.post('/create', projectsController.create);
router.get('/:id', projectsController.project);
router.post('/:id', projectsController.createIssue);

module.exports = router; 