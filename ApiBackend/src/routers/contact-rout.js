const express = require("express");
const  Contact = require("../models/contact")
const router = new express.Router();

router.post("/contact",async(req,res)=>{
    try{

      var newContact =new Contact();
      newContact.name= req.body.name;
      newContact.phone = req.body.phone;
      newContact.email = req.body.email;
      newContact.job = req.body.job;

     console.log(req.body)
   const inserContact = await newContact.save();
   res.send(inserContact)
 
    }catch(e){
      res.status(400).send(e)
    }

})

// router.post("/contact",function(req,res){
//         console.log('contact is created');
//         var newContact =new Contact();
//         newContact.name= req.body.name;
//         newContact.phone = req.body.phone;
//         newContact.email = req.body.email;
//         newContact.job = req.body.job;
//         newContact.save(function(err,inserContact){
//           if (err){
//             console.log('Error for saving vedio');
//           } else{
//             res.json(inserContact)
//           }
//         });
//       });


// router.route('/').post((req, res, next) => {
//   Contact.create(req.body, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// });


router.get("/contact",async(req,res)=>{
    try{

       const getcontacts = await Contact.find({});
   res.send(getcontacts)
 
    }catch(e){
      res.status(201).send(e)
    }

})



router.get("/contact/:id",async(req,res)=>{
    try{
       const  _id = req.params.id;
       const getcontact = await Contact.findById(_id);
   res.send(getcontact)
 
    }catch(e){
      res.status(201).send(e)
    }

})



router.patch("/contact/:_id",async(req,res)=>{
    try{
       const  _id = req.params._id;
       console.log(req.body)

       const getcontact = await Contact.findByIdAndUpdate(_id,req.body, { new : true
           
       });
   res.send(getcontact)
 
    }catch(e){
      res.status(500).send(e)
    }

})

router.delete("/contact/:id",async(req,res)=>{
    try{
       const  _id = req.params.id;
       const getcontact = await Contact.findByIdAndDelete(req.params.id);
   res.send(getcontact)
 
    }catch(e){
      res.status(500).send(e)
    }

})


module.exports = router;












