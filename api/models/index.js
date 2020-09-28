'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    text: {
        type: String,
        required: 'Kindly enter the name of the task'
    }
},
    {
        versionKey: false // set to false then it wont create in mongodb

    }
);

module.exports = mongoose.model('Tasks', TaskSchema);