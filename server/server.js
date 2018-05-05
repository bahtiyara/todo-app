const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

var app = express();

// setup the middleware
app.use(bodyParser.json());

// respond to the post request
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

// respond to the get request
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        res.status(404).send();
    }
    Todo.findById(id).then((todo) => {
        if (!todo) {
            res.status(404).send();
        }
        res.send(todo);
    });
});

// listen to the request
app.listen(3000, () => {
    console.log('The server is up on port 3000');
});