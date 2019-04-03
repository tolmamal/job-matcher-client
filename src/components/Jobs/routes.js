var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var assert = require('assert');

var url = 'mongodb://localhost:27017/job_matcher';

/* GET for Jobs */
router.get('/',function(req, res, next) {
    res.render('JobsTest');
});

router.get('/get-data', function(req, res, next){
    var resultArray = [];
    mongo.connect(url, function(err, db){
        assert.equal(null,err);
        var cursor = db.collection('job').find();
        cursor.foreach(function(doc,err){
            assert.equal(null,err);
            resultArray.push(doc);
        }, function() {
            db.close();
            res.render('JobsTest', {items: resultArray});
        

        });
    });
});
module.exports = router;