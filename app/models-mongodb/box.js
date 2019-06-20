var mongoose = require('mongoose'),
    Schema = mongoose.Schema


var BoxSchema = new Schema({

    id: {type: Number},
    description: {type: String},
    program: {type: String},
    content: {type: String},
    lirowId: {type: Number},

    
})

module.exports = mongoose.model('Box', BoxSchema)