
var path= require("path")
var surveyData = require("../app/data/friends.js");

module.exports = function(app){
app.get("/api/surveyData",function(req,res){
    res.json(surveyData)

})



app.post("/api/surveyData",function(req,res){

   
    var array = surveyData.scores;
    var friendsCount = 0;
    var bestMatch =0; 
    var scoresArray =[];
    var userInput = req.body;
    console.log(req.body);
    var userresponse = userInput.scores
    console.log(userresponse);

    var matchName="";
    var matchImage="";
    for (var i =0 ; i< surveyData.length; i++){
        var diff = 0;

        for (var j=0; j<userresponse.length; j++){
            diff += Math.abs(parseInt(surveyData[i].scores[j]- userresponse[j]))


        }
       scoresArray.push(diff)

    }

    for(var i =0 ; i<scoresArray.length; i++){
        if(scoresArray[i]< scoresArray[bestMatch]){
        bestMatch = i
        }
    }
    
    var bestfriend = surveyData[bestMatch];
    res.json(bestfriend);
    console.log(bestfriend);


    surveyData.push(req.body);
    


})
}