const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
var sass = require('node-sass');
const app = express()
const port = 3000

// Static file
app.use(express.static(path.join(__dirname, '/public/')));
console.log(__dirname)
    
// HTTP logger
app.use(morgan('combined'))

// Template engine
app.engine('.hbs', handlebars.engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, '/resources/views'));

// route
app.get('/home', (req, res) => {
    res.render('home')
})

app.get('/news', (req, res) => {
    res.render('news')
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})