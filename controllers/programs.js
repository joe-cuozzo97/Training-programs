const Program = require("../models/program");

module.exports = {
  index,
  new: newProgram,
  create,
  show,
  createExercise,
  delete: deleteProgram,
  update,
  edit,
};

function index(req, res) {
  Program.find({}, function (err, programs) {
    res.render("programs/index", { title: "All Programs", programs });
  });
}

function newProgram(req, res) {
  Program.find({}, function (err, programs) {
    res.render("programs/new", { title: "Training Programs", programs });
  });
}

let defaultTemplate = require("../template.js");


function create(req, res) {
  Program.create(req.body, (err, createdProgram) => {
    defaultTemplate.forEach(function (template) {
      createdProgram.templates.push(template);
    });
    createdProgram.save(function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log(createdProgram);
        res.redirect("/programs/new");
      }
    });
  });
}

function createExercise(req, res) {
  console.log(req.body);
}

function show(req, res) {
  Program.findById(req.params.id, (err, program) => {
    if (err) {
      console.log(err);
    } else {
      program.templates.sort(function (a, b) {
        return a.day - b.day;
      });
      console.log(program);
      res.render("programs/show", { title: "Program Details", program });
    }
  });
}

async function deleteProgram(req, res) {
  let program = await Program.findByIdAndDelete(req.params.id)
    res.redirect('/programs')
}

function edit() {
  Program.findById(req.params.id).then(function (program) {
    res.render("/programs/update", { workout });
  });
}

async function update(req, res, next) {
  try {
    const filter = { _id: req.params.id };
    let instance = await Model.findOneAndUpdate(filter, req.body, {
      upsert: true,
    });
    await instance.save((err) => {
      return res.redirect("/programs");
    });
  } catch {
    (err) => {
      console.warn(err.message);
    };
  }
}


//conditional to see if daysperweek variable is equal to 3,4, or 5 day options?

  // if (program.daysPerWeek === 3){
  //   result = program.template[0, 1, 2]
  // } else if (program.daysPerWeek === 4){
  //   result = program.template[0, 1, 2, 3]
  // }else {
  //   result = program.template[0, 1, 2, 3, 4]
  // }
  // return result

  