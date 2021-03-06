const router = require('express').Router();
const {User} = require('../../models');

//Add new user
router.post('/signup', (req, res) => {
  User.create({
      username: req.body.username,
      password: req.body.password
  })
      .then(dbUserData => {

          req.session.save(() => {
              req.session.userId = dbUserData.id;
              req.session.username = dbUserData.username;
              req.session.loggedIn = true;

              res.json(dbUserData);
          });
      });
});






router.post('/login', (req, res) => {

  User.findOne({
    where: {
      username: req.body.username
    }
  }).then(dbUserData => {
    if (!dbUserData) {
      res.status(400).json({ message: 'No user with that email address!' });
      return;
    }

    //const validPassword = dbUserData.checkPassword(req.body.password);

    // if (!validPassword) {
    //   res.status(400).json({ message: 'Incorrect password!' });
    //   return;
    // }

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;
  
      res.json({ user: dbUserData, message: 'You are now logged in!' });
    });
  });
});

module.exports = router;