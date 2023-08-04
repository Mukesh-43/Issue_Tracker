const Projects = require('../models/project_schema');

module.exports.home = async function(req,res){

    // TODO create a project list action
    let projects = await Projects.find({});
    res.render('home',{
        title: 'Issue Tracker Home',
        projects : projects
    })
}