const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        unique:[true,'Task already exists'],
        dropDups: true,
        required:[true,'You mast have name'],
        trim:true,        
        maxlength:[20,'Name must be limited to 20 chars']
    },
    completed:{
        type:Boolean,
        default: false,
    },
})

module.exports = mongoose.model('Task',TaskSchema)