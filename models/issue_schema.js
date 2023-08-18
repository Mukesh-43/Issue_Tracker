const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema({       // All the details get stored in the DB with respect to schema
    title: {
        type: String,
        trim: true,
        required: true,
      },
      description: {
        type: String,
        trim: true,
        required: true,
      },
      author: {
        type: String,
        trim: true,
        required: true,
      },
      labels: [       // Array of objects
        {
          type: String,
          trim: true,
          required: true,
        },
      ],
    },{
      timestamps: true,
});

const Issue = mongoose.model('Issue', issueSchema);

module.exports = Issue;