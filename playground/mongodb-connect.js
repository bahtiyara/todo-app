const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    // Handling error
    if (err) {
        return console.log('Unable to connect to the database');
    }
    console.log('Connected to the mongodb');

    // Create/connect to the data base
    const db = client.db('TodoApp');

    // Create/connect to a collection, and insert a document to the collection
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert data', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 4));
    // });

    db.collection('Users').insertOne({
        name: 'Daniyar',
        age: 23,
        location: 'Dalian'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to add a doc', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 4));
    });
    
    // Disconnect database
    client.close();
});