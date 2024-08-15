let db = require('./config/database').db;
let express = require('express');
let port = 3000;
let app = express();
const bodyParser = require("body-parser");
bodyParser.urlencoded({ extended: true });
const path = require('path');
app.set('view engine', 'ejs');
app.set('views', './view');
app.use(express.static(__dirname + "/public"));
const manage = require('./routes/manageRoute');
const index = require('./routes/indexRoute');
const login = require('./routes/loginRoute');
const signup = require("./routes/signupRoute")
const adduser = require("./routes/adduserRoute");
const department = require("./routes/departmentRoute");
const salary = require("./routes/salaryRoute");


app.use("/", index);
app.use("/welcome", login);
app.use("/signup", signup);
app.use("/adduser", adduser);
app.use("/manageuser", manage);
app.use("/manageuser/deleteuser/:email", manage);
app.use("/manageuser/deleteuser/:email", manage);
app.use("/department", department);
app.use("/salary", salary);


app.listen(port, (err) => {
    if (err)
        throw err
    else
        console.log(`server started on ${port}`);
});