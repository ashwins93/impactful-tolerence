const mongoose = require('mongoose');

module.exports = mongoose.model('Log', new mongoose.Schema({
    time: {
        type: Date,
        required: true
    },
    description: String
}, { usePushEach: true }));