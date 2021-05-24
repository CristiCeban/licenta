import {model, Schema} from 'mongoose'

const schema = new Schema({
    email: {type: String, unique: true},
    password: {type: String, required: true},
    facebookId: {type: String}
})

module.exports = model('User', schema)