const Program = require("../models/program");

module.exports = {
  create,
  delete: deleteComment
};

function create(req, res) {
  Program.findById(req.params.id, function (err, program) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

    program.comments.push(req.body);
    // Save any changes made to the program doc
    program.save(function (err) {
      res.redirect(`/programs/${program._id}`)
    });
  });
}

function deleteComment(req, res, next){
// Note the cool "dot" syntax to query on the property of a subdoc
Program.findOne({'comments._id': req.params.id}).then(function(program) {
  // Find the review subdoc using the id method on Mongoose arrays
  // https://mongoosejs.com/docs/subdocs.html
  const review = program.comments.id(req.params.id);
  // Ensure that the review was created by the logged in user
  if (!comment.user.equals(req.user._id)) return res.redirect(`/programs/${program._id}`);
  // Remove the review using the remove method of the subdoc
  comment.remove();
  // Save the updated movie
  program.save().then(function() {
    // Redirect back to the movie's show view
    res.redirect(`/programs/${program._id}`);
  }).catch(function(err) {
    // Let Express display an error
    return next(err);
    // res.redirect(`/programs/${program._id}`);
  });
});
}
