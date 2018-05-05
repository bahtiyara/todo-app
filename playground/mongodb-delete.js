const {MongoClient} = require('mongodb');

// Connecting to the database
MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    // handing with the error
    if (err) {
        return console.log('Unable to connect the the database');
    }
    console.log('Connected to the database');

    // Reaching to the database
    const db = client.db('TodoApp');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Something to do'}).then( (result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log('Unable to delete');
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Something to do'}).then( (result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log('Unable to delete');
    // });

    // findOneAndDelete  // returns the data that just deleted
     db.collection('Todos').findOneAndDelete({text: 'Something to do'}).then( (result) => {
        console.log(result);
    }, (err) => {
        console.log('Unable to delete');
    });

    // Disconnect from the library
    client.close();
});