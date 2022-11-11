var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var jwt =require('jsonwebtoken');



const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please provide a username"],

    },
    lastname:{
        type:String,
        required:[true,"please provide a username"],

    },
    email:{
        type:String,
        required:[true,'please provide a email'],
        unique:true,

    },
    password:{
        type:String,
        required:[true,'please provide a password'],
        minlength:6,
        select:false
    },
    resetPasswordToken:String,
    resetPasswordExpire:Date
});

 
UserSchema.pre("save",async function(){
    if(!this.isModified('password'))
    {
        next();
    } 
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
});
UserSchema.methods.getSignToken = function(){
    return jwt.sign({id: this._id},
        process.env.JWT_SECRET,{expiresIn:process.env.JWT_Expire});

};


UserSchema.methods.matchPassword =async function(password)
{
    return await bcrypt.compare(password,this.password);
}

UserSchema.method.password = async function(password)
{
    return await bcrypt(this.password);
}
const User = mongoose.model('User',UserSchema);
module.exports = User