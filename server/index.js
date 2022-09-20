const express = require("express");
const cors = require("cors");

const bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var bcrypt = require("bcryptjs");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let collectionModel = require("./mongoose");

app.post("/signin", urlencodedParser, (req, res) => {
  var emailEntered = req.body.email;
  var passwordEntered = req.body.pass;
  var findRecord = collectionModel.find({ email: emailEntered });

  findRecord.exec(function (err, data) {
    if (err) throw err;
    if (data.length == 0) {
      res.json({ message: "Email Id Not Registered", status: false });
    } else {
      if (bcrypt.compareSync(passwordEntered, data[0].password)) {
        res.json({ message: "SUCCESS", status: true });
      } else {
        res.json({ message: "Invalid Email Id and Password", status: false });
      }
    }
  });
});

app.post("/signup", (req, res) => {
  var findRecord = collectionModel.find({ email: req.body.email });
  findRecord.exec(function (err, data) {
    if (err) throw err;
    if (data.length > 0) {
      res.json({ message: "Email Id Already Registered" });
    } else {
      if (req.body.pass != req.body.cpass) {
        res.json({ message: "Confirm Password does not match" });
      } else {
        var record = new collectionModel({
          name: req.body.name,
          email: req.body.email,
          password: bcrypt.hashSync(req.body.pass, 10),
        });
        record.save(function (err, ress) {
          if (err) throw err;
          res.json({ message: "Registered Successfully. Login to Continue" });
        });
      }
    }
  });
});

app.listen(3001, () => {
  console.log("Server is running at port 3001");
});
