var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var size = process.argv[2];
var col = 'prices';
mongo.connect(url, function (err, db) {
    if (err) throw err;
    var prices = db.collection(col);
    prices.aggregate([{
            $match: { 
                size: size
                
            }
        }, {
            $group: {
                    _id: 'average',
                    average: {
                        $avg: '$price'
                    }
            }
        }]).toArray(function( err, res ) {
            if (err) throw err;
            if (!res.length) {
                throw new Error('No results were found');
            }
            console.log(Number(res[0].average).toFixed(2));
            db.close();
        });
})