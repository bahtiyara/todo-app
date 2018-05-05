const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    // handling error
    if (err) {
        return console.log('Undable to connect to the database', err);
    }
    console.log('Connected to the database');

    // Riching to the database
    const db = client.db('TodoApp');

    // fetching all data
    // db.collection('Todos').find().toArray().then((docs) => {
    //     console.log(JSON.stringify(docs, undefined, 4));
    // }, (err) => {
    //     console.log('Unable to fetching the data from database');
    // });

    // Fetching data with id query
    // db.collection('Todos').find({
    //     _id: new ObjectID('5aed22d1db8d9e278bf59b3d')
    // }).toArray().then((docs) => {
    //     console.log(JSON.stringify(docs, undefined, 4));
    // }, (err) => {
    //     console.log('Unable to fetching data', err);
    // });

    // Fetching data with count method
    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetching data', err);
    // });

    // Fetching data with name
    db.collection('Users').find({
        name: 'Daniyar'
    }).count().then((count) => {
        console.log(`# of user(s): ${count}`);
    }, (err) => {
        console.log('Unable to fetch the user', err);
    });

    // Disconnect from the database
    client.close();
});