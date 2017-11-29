var mongo = require('mongodb').MongoClient;
var dbName = process.argv[2];
var url = 'mongodb://localhost:27017/';
mongo.connect(url + dbName, function (err, db) {
    if (err) throw err;
    var collection = db.collection('users');
    collection.update(
        {
            username: "tinatime"
        },
        {
            $set: {
                age: 40
            }
        }, function (err, data) {
            if (err) throw err;
            console.log("updated");
            db.close();
        })
})