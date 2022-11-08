var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
const connectDB = async function(){
    await mongoose.connect(process.env.URI,{
        useNewUrlParser:true,
    } ,err =>{if(err) throw err;console.log('connected to mongo')});

}

module.exports = connectDB;