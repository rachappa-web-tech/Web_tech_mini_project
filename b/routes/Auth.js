var express = require('express');
const { default: mongoose } = require('mongoose');
var router = express.Router();
var User = require("../models/User");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/reg', async function(req, res, next) {
    const {name,lastname,email,password} = req.body;
    try{
        const user= await User.create({name,lastname,email,password});
        console.log(user)
        res.status(200).json({
          success:true,
          token:user.getSignToken()
        });  

    }
    catch(error)
    {
        res.status(400).json({
            success:false,
            message:error.message
        });
    }
  });

  router.post('/log', async function(req, res, next) {
    const {email,password }= req.body;
    console.log(email);
    console.log(password);
    if(!email || !password){
      res.status(400).json({success:false,error:"Please provide email and password"})
    }
    try{
      const user= await User.findOne({email}).select("+password");
      if(!user){
        res.status(404).json({success:false,error:"Invalid Credentials"});

      }
      const isMatch = await user.matchPassword(password);
      if(!isMatch){
        res.status(404).json({success:false,error:"Invalid password"})
      }
   
      res.status(200).json({
          success:true,
          token:user.getSignToken()
        });    
    }
    catch(error)
    {
      res.status(400).json({
        success:false,
        message:error.message
    });
    }
  });
  router.post('/forget', async function(req, res, next) {
    const {email}= req.body;
    console.log(email);
    if(!email ){
      res.status(400).json({success:false,error:"Please provide email "})
    }
    try{
      const user= await User.findOne({email}).select("+password");
      if(!user){
        res.status(404).json({success:false,error:"Invalid Credentials"});
      }
      const isMatch = await user.matchPassword(password);
      if(!isMatch){
        res.status(404).json({success:false,error:"Invalid password"})
      }
   
      res.status(200).json({
          success:true,
          token:user.getSignToken()
        });    
    }
    catch(error)
    {
      res.status(400).json({
        success:false,
        message:error.message
    });
    }
  });
 

  
module.exports = router;
