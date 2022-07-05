// TODO: Add a comment indicating how this file fits into the MVC framework (is it a Model, a View, or a Controller?) and what it is responsible for handling.
// This is a controller - its a file which holds the paths to connect the model & the view. 
// It is responsible for handling user requests & providing the correct response.

const router = require('express').Router();

// TODO: Add a comment describing the purpose of the get route
router.get('/', async (req, res) => {
//TODO: Add a comment describing the purpose of the render method.
// this function is provided to us by connecting express & handlebars
// (app.engine & app.set)
// the 'all' is relating to the all.handlebars file in the view/layout folder
  res.render('all');
});

module.exports = router;
