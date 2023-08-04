const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_Controller');
const projectsController = require('../controllers/projects_Controller');

router.get('/',homeController.home);
router.use('/projects',require('./projects'));

module.exports = router; 