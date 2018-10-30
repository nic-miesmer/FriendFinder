
var friendsData = require("../data/friends");
var express = require('express');

var router = express.Router();

router.get('/api/friends', function(req, res){


        res.json(friendsData);
});


router.post('/api/friends', function(req, res){

     //grabs the new users scores to compare with friends in the friends array
     var surveyAnswers = req.body.scores;
     var scoreDifferenceArray = [];
     var bestFriendMatch = 0;
     
     //loop to run through the current friends list
     for (var i=0; i<friends.length; i++){
         var difference = 0;
         //run through the scores in the friends array to compare friends
         for (var j=0; j<surveyAnswers.length; j++){            
             difference += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(surveyAnswers[j])));
         }
         //push into the scoresArray
         scoreDifferenceArray.push(difference);
     }
     // after all friends are compared find the best match based on similar scores
     for (var k=0; k<scoreDifferenceArray.length; k++){
         if(scoreDifferenceArray[k]<= scoreDifferenceArray[bestFriendMatch]){
            bestFriendMatch = k;
         }
     }
     //retun bestMatch data
     var foundFriend = friends[bestFriendMatch];
     //push new submission into the friends array
     
     friends.push(req.body);
     res.json(foundFriend);
     
 });



module.exports = router;