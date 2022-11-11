var mongoose = require('mongoose');



const NameSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please provide a Namename"],

    },
    resetPasswordToken:String,
    resetPasswordExpire:Date
});
const Name = mongoose.model('Name',NameSchema);
module.exports = Name