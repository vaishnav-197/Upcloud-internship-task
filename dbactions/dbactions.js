const { query } = require('express')
var User = require('../models/user')





var functions = {
    
    
    
        //----------------------------------------------------------------
    // function to add users
        addNewUser:  (req, res) => {

            name = req.body.name
            email = req.body.email
            contact = req.body.contact
            image = req.file.buffer
            console.log(typeof(email))


        if ((!name)  ||  (!email) || (!contact) || (!image)) {
            res.json({success: false, msg: 'Enter all fields'})
            console.log('all feilds req')
        }
        
        
        if(email){
        
            User.findOne(
                {email:email}
            ).then(user =>{
                if(user){
                    res.json({success: false, msg: 'email id already taken'})
                    console.log('email taken')
                }
            else{
                var newUser = User({
                    name: name,
                    email: email,
                    contact: contact,
                    image:image
                });
                newUser.save(function (err, newUser) {
                    if (err) {
                        res.json({success: false, msg: 'Failed to save'})
                        console.log('failed to save ')
                    }
                    else {
                        res.json({success: true, msg: 'Successfully saved'})
                        console.log('saved success')
                    }
                })
        }})
        .catch(err => console.log(err))

            }
        
        }

        ,


        //----------------------------------------------------------------
        // function to get users

        getUsers: async(req , res)=> {
            User.find({} , (err , user) =>{
                if(err) throw err
                if(user){
                    console.log(user)
                    res.status(200).json({success: true, users:  user })
                }
                else{
                    res.status(404).json({success: false, users:  'No  records found' })
                }
            })
        }
        ,

        //---------------------------------------------------------------- 
        // get user profile images
        getUsersImg: async (req , res ) => {
            email=req.query.email
            User.findOne({email:email} , (err , user) =>{
                if(err) throw err
                if(user){
                    console.log(user)
                    res.set('Content-Type','image/jpg')
                    res.send(user.image)
                }
                else{
                    res.status(404).json({success: false, users:  'N0 matching records found' })
                }
            })

        }

        ,



        //----------------------------------------------------------------
        // patch details of user
        patchUserDetails: async (req , res) => {
            params = {}
            for (i in req.query){
                if (i!= 'email'){
                    params[i]=req.query[i]
                }
            }
            console.log(params)
            

            // filter to update
            filter = { email: req.query.email}

            

            // updated values
            const updateDoc = {
                $set: params,
              };

             User.updateOne(filter, updateDoc,(err, result)=> {
                 if(result.nModified <1) {
                     res.status(400).json({success:false , msg:'No Records  Updated (if no such recordsd exist or nothing to update)'})
                 }
                 else if (result.nModified ==1){
                     
                     res.status(200).json({success:true , msg:'Record  Updated'})
                 }
             });
        }
        ,


        
        //----------------------------------------------------------------
        // delete users
        deleteUserDetails: async (req , res)=> {
            email=req.query.email
            
            User.deleteOne(
                {email : email },
                (err , result) => {
                    if(result.deletedCount <1){
                        res.status(400).json({success:false , msg:'nothing to delete '})
                    }
                    else if (result.deletedCount ==1){
                        res.status(200).json({success:true , msg:'Record  Deleted'})
                    }
                }
            )
        }
}


module.exports = functions