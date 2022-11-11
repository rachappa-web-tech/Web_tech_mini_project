var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/:id",function(req,res,next)
{
  if(req.params.id == 100)
  {
    res.send("hello");

  }
  else{
    next(err);

  }
})
router.use(function(err,req,res,next)
{
  res.send("full errp");
})
module.exports = router;
