const { timeStamp } = require('console');
const mongoose = require('mongoose');
const { type } = require('os');
const usersSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
        unique:true
    },
    created_at:{
        type:String,
        // require:true
    }
})

const Users  = mongoose.model('Users',usersSchema);
module.exports = Users