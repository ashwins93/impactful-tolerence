const mongoose = require('mongoose');

module.exports = mongoose.model(
  'Log',
  new mongoose.Schema(
    {
      date: {
        type: Date,
        required: true,
      },
      description: {
        type: String,
        required: true,
      }
    },
    { usePushEach: true },
  ),
);
