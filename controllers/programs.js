const Program = require("../models/program");

module.exports = {
  index,
};



function index(req, res) {
    res.render('programs/index', {title: 'programs'})

}