const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({       // All the details get stored in the DB with respect to schema
    name: {
        type: String,
        trim: true,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      author: {
        type: String,
        required: true,
      },
      issues: [                                    // Array of objects
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Issue',
        },
      ],
      labels: [                                    // Array of objects
        {
          type: String,
        },
      ],
},{
    timestamps: true
});

const Project = mongoose.model('Project',projectSchema);

module.exports = Project;