const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
var sass = require('node-sass');
const app = express()
const port = 3000

const route = require('./routes/index')

// Static file
app.use(express.static(path.join(__dirname, '/public/')));
console.log(__dirname);

// Middleware:
app.use(express.urlencoded({
    extended: true
})); // handle data from form to server
app.use(express.json()); // handle data (JS) from client to server: submit HTML or use JS lib: XMLHttpRequest, Fetch, axios, supervision,... 

// HTTP logger
app.use(morgan('combined'))

// Template engine: hbs
app.engine('.hbs', handlebars.engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, '/resources/views'));

// routes init
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})