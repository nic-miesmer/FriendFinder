
var friendsData = require("../data/friends");



var express = require('express');

var router = express.Router();

router.get('/api/friends', function(req, res){

        res.json(friendsData);
})




module.exports = router;