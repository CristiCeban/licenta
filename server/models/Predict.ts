import {model, Schema,Types} from 'mongoose'

const schema = new Schema({
    path: {type: String, required: true, unique: true},
    percent:{type:Number,required:true},
    date: {type: Date, required: true},
    userId: {type:Types.ObjectId,ref:'User',required:true},
})

module.exports = model('Prediction', schema)