var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var userSchema = new Schema({
    name: {
        type: String,
        require: true,
        trim:true
    },
    contact: {
        type: String,
        require: true,
        
    },
    email: {
        type: String,
        require: true,
        
    },
    image: {
        type: Buffer,
        contentType: String
    }
},
{ collection: 'users'})


module.exports = mongoose.model('User', userSchema)
