const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

var app = express();

// setup the middleware
app.use(bodyParser.json());

// make post request
app.post('/todos', (req, res) => {
    // make the objcet
    var todo = new Todo({
        text: req.body.text
    });
    // save the object into database
    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.listen(3000, () => {
    console.log('The server is up on port 3000');
});