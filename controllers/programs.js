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
  console.log('********')
 console.log(req.body)
 console.log(Object.keys(req.body))
 console.log('********')

  const filter = { _id: req.params.id };
  let instance = await Program.findOne(filter);
  instance.templates[0] = req.body;

  instance.save((err) => {
    console.log(err)
    return res.redirect("/programs");
  });
}



// async function update(req, res, next) {
//   console.log(req.body)
//   try {
//     const filter = { _id: req.params.id };
//     let instance = await Program.findOneAndUpdate(filter, req.body, {
//       upsert: true,
//     });
//     console.log('this is the' + instance)
//     await instance.save((err) => {
//       return res.redirect("/programs");
//     });
//   } catch {
//     (err) => {
//       console.warn(err.message);
//     };
//   }
// }

  