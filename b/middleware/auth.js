const jwt = require('jsonwebtoken');
const User = require('../models/User');
const user = require('../models/User');

exports.protect = async (req,res,next) =>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith("god")){
        token = req.headers.authorization.split(" ")[1];
   //     console.log(token)
    }
    if(!token)
    {
        res.status(400).json({
            success:false,
            message:"Not authorized to accesss this route",
        });
    }
    try{
        const decode = jwt.verify(token,process.env.JWT_SECRET);
        const user = await User.findById(decode.id);
        if(!user)
        {
            res.status(400).json({
                success:false,
                message:"No user found",
            });
        }
        req.user = user;
        console.log(user)
        next();
    }
    catch(error)
    {
        res.status(400).json({
            success:false,
           error:error.message
        });
    }
}