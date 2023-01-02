const Program = require("../models/program");

module.exports = {
  create,
};

function create(req, res) {
  Program.findById(req.params.id, function (err, program) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

    program.comments.push;
    // Save any changes made to the program doc
    program.save(function (err) {
      res.redirect(`/programs/${program._id}`);
    });
  });
}
