const mongoose = require('mongoose');

const courtSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    rate:{
        type:String,
        required:true
    },
    about:{
        type:String,
        required:true
    },
    image : {
        type: String,
        required:true
    }
})

const courtModal = mongoose.model('courts',courtSchema);
module.exports = courtModal