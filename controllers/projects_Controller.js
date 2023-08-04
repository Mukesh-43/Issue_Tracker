const Project = require('../models/project_schema');

module.exports.create_project = async function(req,res){

        res.render('projectsPage',{
            title: 'Projects creating Page'
        })
}

module.exports.project_created = async function(req,res){
    try{
        console.log('*****',req.body);
        const project = await Project.create({
            name: req.body.name,
            description: req.body.description,
            author: req.body.author
        })
        return res.redirect('/');
    }catch(err){
        console.log('Error in creating project', err);
    }
}