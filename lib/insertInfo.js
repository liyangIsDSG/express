const mongoclient = require("mongodb").MongoClient;

const assert = require('assert');

const url = "mongodb://106.53.25.94:27017";

// Database Name
const dbName = 'data';

mongoclient.connect(url, function (err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);
    const data = {
        "name": "test1",
        "age": 22,
        "addr": "nb",
        "addTime": new Date()
    };
    db.insert(data, function (error, result) {
        if (error) {
            console.log('Error:' + error);
        } else {

            console.log(result.result.n);
        }
        db.close();
    });

});