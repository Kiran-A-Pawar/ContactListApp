

const express = require ('express');
const  Mongoose = require('mongoose');

const ContactSchema = new Mongoose.Schema({

       name:{
           type : String
           
       },
    
        phone:{
            type : String
        },

        email : {
            type  : String
        },

        job :{
            type : String
        }
})

const Contact = new Mongoose.model("Contact", ContactSchema )
module.exports =  Contact;