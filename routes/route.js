const express = require('express')
const actions = require('../dbactions/dbactions')
const validator = require("email-validator");
const multer = require('multer');
const router = express.Router()
const validatePhoneNumber = require('validate-phone-number-node-js');
const { patchUserDetails, deleteUserDetails } = require('../dbactions/dbactions');

const profile = multer({
  limits:{
      
      fileSize:1000000,
  },
  fileFilter(req,file,cb){
      if(!file.originalname.match(/\.(jpg|png|JPG|PNG|JPEG|jpeg)$/))
      return cb(new Error('This is not a correct format of the file'))
      cb(undefined,true)
  }
})

// check('phone').isMobilePhone().withMessage('not a valid phone number')

// Add routes here

router.post('/adduser',
profile.single('profile'),
(req,res)=>{
  try{
    const result = validatePhoneNumber.validate(req.body.contact);
  const emailValidator = validator.validate(req.body.email);
  if(emailValidator == false){
    res.status(402).json({success: false, msg: 'invalid email id '})
  }
  else if(result == false){
    res.status(402).json({success: false, msg: 'invalid phone number'})
  }
  else{
    actions.addNewUser(req,res)
  }
  }
  catch(e){
    res.status(400).send(e.message)
}
  
 
}
)


// route to get user details 
router.get('/users',actions.getUsers)

// route to get user profile 
router.get('/img',actions.getUsersImg)

// route to patch details
router.patch('/users',(req,res)=> {
  try{
    const result = validatePhoneNumber.validate(req.query.contact);
  const emailValidator = validator.validate(req.query.email);
  if(emailValidator == false){
    res.status(402).json({success: false, msg: 'invalid email id '})
  }
  else if(result == false){
    res.status(402).json({success: false, msg: 'invalid phone number'})
  }
  else{
    actions.patchUserDetails(req,res)
  }
  }
  catch(e){
    res.status(400).send(e.message)
}

})


// route to delete user details  
router.delete('/users' , actions.deleteUserDetails)




module.exports = router