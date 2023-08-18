const Project = require('../models/project_schema');
const Issue = require('../models/issue_schema');

// create a project for the user
module.exports.create = async function (req, res) {
    try {
      Project.create(req.body);
      return res.redirect('back');
    } catch (err) {
      console.log(err);
      return res.redirect('back');
    }
  };
  
  // find project and display it in the project page
  module.exports.project = async function (req, res) {
    try {
      let project = await Project.findById(req.params.id).populate({
        path: 'issues'
      });
      if (project) {
        return res.render('project_page', {
          title: 'Project Page',
          project: project
        });
      }
      return res.redirect('back');
    } catch (err) {
      console.log(err);
      return res.redirect('back');
    }
  };
  
  // create issue
  module.exports.createIssue = async function (req, res) {
    try {
      let project = await Project.findById(req.params.id);
      if (project) {
        let issue = await Issue.create(req.body);
        project.issues.push(issue);
  
        if (!(typeof req.body.labels === 'string')) {
          for (let label of req.body.labels) {
            let isPresent = project.labels.find((obj) => obj == label);
            if (!isPresent) {
              project.labels.push(label);
            }
          }
        } else {
          let isPresent = project.labels.find((obj) => obj == req.body.labels);
          if (!isPresent) {
            project.labels.push(req.body.labels);
          }
        }
        await project.save();
        return res.redirect(`back`);
      } else {
        return res.redirect('back');
      }
    } catch (err) {
      return res.redirect('back');
    }
  };
  