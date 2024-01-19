const express=require('express');
const User=require('../models/User');
const router=express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');




// Craete a user using : POST"/api/auth/createuser". No login required
router.post('/createuser',[
    body('name','Enter a valid name').isLength({ min: 3 }),
    body('email','Enter a valid email').isEmail(),
    body('password','Password must be atleast 5 character').isLength({ min: 5 }),


], async (req, res)=>{
   
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
try{
let user = await User.findOne({email:req.body.email});
if(user){
  return res.status(400).json({error:"Sorry  a user with this email already exist"});
}

const salt = await bcrypt.genSaltSync(10);
 const secPass= await bcrypt.hash(req.body.password, salt); 


// Create a new user
     user= await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      })
      // .then(user => res.json(user));
      // res.json({error:'Please enter a unique value for email', message:err.message})
      const data={
        user:{
          id:user.id
        }
      }
      const jwtData = jwt.sign(data, JWT_SECRET);
      console.log(jwtData);
    res.json(user)
}catch(error){
  console.error(error.message);
  res.status(500).send("Some error occured");
}
})

module.exports=router
