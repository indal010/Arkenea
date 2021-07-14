const mongoose = require('mongoose')
const UserSchema = mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: [true, 'Invalid Email'],
        index: {
            unique: true
        },
        match: /^[a-z][a-z0-9]*[.+-]?[a-z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]{2,3}([.]{1}[a-z]{2,3})?$/
    },
    phoneNumber: {
        type: String
        
    },
    profileImage: {
        type: String
 
    }
    
})
 
module.exports = mongoose.model('UserDetails', UserSchema)


