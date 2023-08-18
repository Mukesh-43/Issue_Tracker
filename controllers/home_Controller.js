const Project = require('../models/project_schema'); // requiring schema

module.exports.home = async function(req,res){

    try {
        let projects = await Project.find({}).sort('-createdAt'); // finding all the projects and sorting it according to time
        return res.render('home', {
          title: 'Issue Tracker - Home',
          projects: projects, // The found projects passed to the home page
        });
      } catch {
        console.log('Error', err);
        return;
      }
};