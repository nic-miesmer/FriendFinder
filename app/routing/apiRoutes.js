
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
     
     //loop through 
     for (var i=0; i<friendsData.length; i++){
         var difference = 0;
         
         //run through the scores in the friends array, and sum the absolute difference
         for (var j=0; j<surveyAnswers.length; j++){            
             difference += (Math.abs(parseInt(friendsData[i].scores[j]) - parseInt(surveyAnswers[j])));
         }
         //push into the score difference array to compare later
         scoreDifferenceArray.push(difference);
     }
     // after all friends are compared find the best match based on similar scores
     for (var k=0; k<scoreDifferenceArray.length; k++){
         if(scoreDifferenceArray[k]<= scoreDifferenceArray[bestFriendMatch]){
            bestFriendMatch = k;
         }
     }
     var foundFriend = friendsData[bestFriendMatch];

     //push new submission into the friends array
     friendsData.push(req.body);
     res.json(foundFriend);
     
 });



module.exports = router;