const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    }
});

const Project = mongoose.model('Project',projectSchema);

module.exports = Project;