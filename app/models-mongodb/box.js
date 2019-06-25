var mongoose = require('mongoose'),
    Schema = mongoose.Schema


var BoxSchema = new Schema({

    description: {type: String, required: true},
    program: {type: String, required: true},
    content: {type: String, required: true},
    lirowId: {type: Number, required: true},

    
})

module.exports = mongoose.model('Box', BoxSchema)