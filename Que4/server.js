const express = require('express');
const app = express();
require('dotenv').config();
require('./db/connection');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const router = require('./routes/routes');
const handlebars = require('handlebars');

handlebars.registerHelper('eq', function (a, b, options) {
    return a === b ? options.fn(this) : options.inverse(this);
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(
    session({
        secret:"hello",
        resave:false,
        saveUninitialized:true
    })
)
app.set('view engine','hbs');
app.use(router);

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on ${process.env.PORT}`);
})