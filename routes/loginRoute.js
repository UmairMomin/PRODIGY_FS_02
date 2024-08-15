const express=require('express');
const router=express.Router();
const db = require('../config/database').db;
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));

router.post("/",(req,res)=>{
    const {email,password} = req.body;
    if (email == "admin@admin.com" && password == "admin")
    {
        res.render("wel", { pageTitle: 'Welcome'});
    } 
    else 
    {   
        res.render("login",{ pageTitle: 'Login', msg: true})
    }
});
module.exports = router;