const mongoose = require('mongoose')

const JobSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    logo: {
        type: String,
    },
    candidate: {
        type: Number
    }
})










