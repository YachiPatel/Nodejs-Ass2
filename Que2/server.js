const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const bodyParser = require('body-parser');
const router = require('./routes/route');
const path = require('path');
const exp = require('constants');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 8000;

// app.use(express.static(path.join(__dirname,'/views')));
app.use(router);
app.set('view engine','ejs');

app.use(
    session({
      store: new FileStore({ path: './session-data' }),
      secret: 'secretkey', 
      resave: false,
      saveUninitialized: true,
      cookie: { secure: false }, 
    })
  );
  

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });