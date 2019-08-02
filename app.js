const serverless = require("serverless-http");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const Jedi = require("./models/jedi");
const app = express();

mongoose
  .connect("mongodb+srv://killallskywalker:Qyla94!!@cluster-one-n6hts.mongodb.net/star-wars?retryWrites=true&w=majority")
  .then(() => console.log("Connected to tatooine"))
  .catch(err => console.log(err));

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/jedi", function(req, res) {
  Jedi.find({})
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => res.send("Something Went Wrong"));
});

app.get("/jedi/:id", function(req, res) {
  Jedi.findById({ _id: req.params.id })
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => res.send("Something Went Wrong"));
});


app.post("/jedi", function(req, res) {
  const name = req.body.name;
  const age = req.body.age;

  const user = User({
    name,
    age
  });
  user
    .save()
    .then(data => res.status(200).send(data))
    .catch(err => res.send("Error occured"));
});

app.put("/jedi/:id", function(req, res) {
  const name = req.body.name;
  const age = req.body.age;

  User.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        name,age
      }
    },
    { new: true }
  )
    .then(data => res.send(data))
    .catch(err => res.send(err));
});

app.delete("/jedi/:id", function(req, res) {
  Jedi.findByIdAndRemove({ _id: req.params.id })
    .then(data => res.send(data))
    .catch(err => res.send("Error Occured "));
});

module.exports.handler = serverless(app);