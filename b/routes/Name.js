var express = require('express');
const { default: mongoose } = require('mongoose');
var router = express.Router();
var Name = require("../models/name");

/* GET home page. */

router.get('/data',async function(req, res, next) {
Name.find(function(err,data)
{
  if(err)
  { res.status(400).json({
    success:false,
    message:error.message
});
  }
  else{
    res.status(200).json(
     data
  );  }
})
}
)
    

router.get("/:id",function(req,res,next)
{
  if(req.params.id == 100)
  {
    res.send("hello");

  }
  else{
    var err = new Error("---------------Full of Errors--------------------")
    next(err);

  }
})



router.post('/add', async function(req, res, next) {
    const {name} = req.body;
    try{
        const user= await Name.create({name});
        console.log(user)
        res.status(200).json({
          success:true,
          token:user
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
