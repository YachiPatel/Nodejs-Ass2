const router = require('express').Router();
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const express = require('express');
const app = express();
app.use(
  session({
    store: new FileStore({ path: './session-data' }),
    secret: 'secretkey', 
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, 
  })
);

router.get('/login', (req, res) => {
    res.render('login');
  });
  
  router.post('/login', (req, res) => {
    const { username, password } = req.body;
  
    if (username === 'yachi' && password === 'yachi123') {
      session.authenticated = true;
      res.redirect("/");
    } else {
        res.redirect("/login");
    }
  });
  
  // Home page
  router.get('', (req, res) => {
    if (session.authenticated) {
      res.render('home');
    } else {
      res.redirect('/login');
    }
  });
  
  // Logout
  router.get('/logout', (req, res) => {
    session.authenticated = "";
    res.redirect('/login');
  });

  module.exports = router;