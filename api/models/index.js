'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    text: {
        type: String,
        required: 'Kindly enter the name of the task'
    }
});

module.exports = mongoose.model('Tasks', TaskSchema);