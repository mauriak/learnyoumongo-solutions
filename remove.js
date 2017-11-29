var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/' + process.argv[2];

mongo.connect(url, function (err, db) {
    if (err) throw err;
    var _id = process.argv[4];
    var collection = db.collection(process.argv[3]);
    collection.remove({
        _id: _id
    }, function (err) {
        if (err) throw err;
        console.log("id: " + _id + " removed from database " + process.argv[2]);
        db.close();
        
    })
})