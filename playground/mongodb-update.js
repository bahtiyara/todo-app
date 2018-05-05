const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    // Handling with the errors
    if (err) {
        return console.log('Undable to connect to the database', err);
    }
    
    // Reaching to the database
    const db = client.db('TodoApp');

    // Update data with set operator
    // db.collection('Todos').findOneAndUpdate( {
    //     _id: new ObjectID('5aed22d1db8d9e278bf59b3d')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then( (result) => {
    //     console.log(JSON.stringify(result, undefined, 4))
    // });

    // Update data with inc operator
    db.collection('Users').findOneAndUpdate( {
        _id: new ObjectID('5ae85ec51eb6e3e488424db4')
    }, {
        $inc: {
            age: -1
        }
    }, {
        returnOriginal: false
    }).then( (result) => {
        console.log(JSON.stringify(result, undefined, 4))
    });

    // Disconnect from the database
    client.close();
});