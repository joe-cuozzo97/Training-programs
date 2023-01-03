const Program = require("../models/program");

module.exports = {
  index,
  new: newProgram,
  create,
  show,
};

function index(req, res) {
  Program.find({}, function (err, programs) {
    res.render("programs/index", { title: "All Programs", programs });
  });
}


function newProgram(req, res) {
  Program.find({}, function(err, programs){
    res.render("programs/new", { title: "Training Programs", programs });
  })
}

function create(req, res) {
  Program.create(req.body, (err, createdProgram) => {
    if (err) {
      console.log(err);
    } else {
      console.log(createdProgram);
      res.redirect("/programs/new");
    }
  });
}

function show(req, res) {
  Program.findById(req.params.id, (err, program) => {
    if (err) {
      console.log(err);
    } else {
      res.render("programs/show", { title: "Program Details", program });
    }
  });
}
