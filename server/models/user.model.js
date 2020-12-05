const {model, Schema} = require('mongoose')

const userSchema = new Schema({
    nick: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
    },
    surname: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        required: true
    }
})

module.exports = model('users', userSchema)