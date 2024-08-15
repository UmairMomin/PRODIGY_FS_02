const express=require('express');
const router=express.Router();
const db = require('../config/database').db;
const bodyParser = require("body-parser");
const { route } = require('./manageRoute');
router.use(bodyParser.urlencoded({ extended: true }));

router.post("/", (req, res) => {
    const { name, email,password } = req.body;
    let qry = "insert into employee_db.employee_details(fullname,email,password) values (?,?,?)";
    db.query(qry, [name, email, department, salary, username, password], (err, result) => {
        // res.send(result);
        if (result.affectedRows > 0) {
            res.render("login", { pageTitle: 'Login',});
        }
    });
});

module.exports = router;