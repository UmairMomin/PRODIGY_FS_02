const express = require('express');
const router = express.Router();
const db = require('../config/database').db;
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));

router.post("/", (req, res) => {
    const { name, email, department, salary, username, password } = req.body;
    let qry = "insert into employee_db.employee_details(fullname,email,department,salary,password) values (?,?,?,?,?,?)";
    db.query(qry, [name, email, department, salary, username, password], (err, result) => {
        // res.send(result);
        if (result.affectedRows > 0) {
            res.render("user", { pageTitle: 'Create User', msg: true });
        }
    });
});

module.exports = router;

