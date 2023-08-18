const Project = require('../models/project_schema');
const Issue = require('../models/issue_schema');

// creating a project using the details from the project_form
module.exports.create = async function (req, res) {
    try {
      Project.create(req.body);
      return res.redirect('back');
    } catch (err) {
      console.log(err);
      return res.redirect('back');
    }
  };
  
  // finding project and displaying it in the project page
  module.exports.project = async function (req, res) {
    try {
      let project = await Project.findById(req.params.id).populate({   // find the project using id and populating it
        path: 'issues'
      });
      if (project) {
        return res.render('project_page', {
          title: 'Project Page',
          project: project       // The found project is passed to the project page
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
      let project = await Project.findById(req.params.id);    // find the project using id 
      if (project) {
        let issue = await Issue.create(req.body);             // create an issue for the respective project
        project.issues.push(issue);                           // pushing the created issue to an array
  
        if (!(typeof req.body.labels === 'string')) {         // this part is used for the dropdown in issue form
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
        await project.save();                // this line will save the project after pushing the labels and issues to the respective arrays
        return res.redirect(`back`);
      } else {
        return res.redirect('back');
      }
    } catch (err) {
      return res.redirect('back');
    }
  };
  