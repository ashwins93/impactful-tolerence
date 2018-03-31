const mongoose = require('mongoose');

module.exports = mongoose.model(
  'Project',
  new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      status: {
        type: String,
        default: 'Not set',
      },
      startedOn: {
        type: Date,
        required: true,
      },
      timeline: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Log',
        },
      ],
    },
    { usePushEach: true },
  ),
);
