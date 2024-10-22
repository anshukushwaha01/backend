const mongoose = require('mongoose');
require('dotenv').config();
const URI=process.env.MONGO_URI;
console.log(URI);

exports.connectDB =async()=>{
    try{
        await mongoose.connect(URI);
        console.log('db connected');
    }catch(error){
        console.log('db not connected');
    }
}