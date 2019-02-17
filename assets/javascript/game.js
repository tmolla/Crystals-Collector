var game = {
    targetScore: 0,
    totalScore: 0,
    wins: 0,
    losses: 0,
    crystal: [4,5,6,7],
    updateWin: function(score){
        $("#win").text("Wins: " + score.toString())
    },
    updateLosses: function(score){
        $("#losess").text("Losses: "+ score.toString())
    },
    updateScore: function(index){
        console.log("index " + index.toString());
        console.log("value of crystal " + this.crystal[index]);
        this.totalScore += this.crystal[index];
        $("#your-score").text( this.totalScore.toString());
        if(this.totalScore > this.targetScore){
            alert(">");
            this.updateLosses;
            this.initializeGame()
        }
        if(this.totalScore == this.targetScore){
            alert("=");
            this.updateWin;
            this.initializeGame()
        };
    },
    
    initializeGame: function() {
        for (var i=0; i<this.crystal.length; i++){
            this.crystal[i] = Math.floor(Math.random() * 12) + 1;
        } 
        this.targetScore = Math.floor(Math.random() * 120) + 19;
        $("#number").text(this.targetScore.toString());
        this.updateWin(0);
        this.updateLosses(0);
    },
}

$(document).ready(function(){ 
    game.initializeGame();
});

$("#crystal-1").on("click", function(){
    //var randomNum = Math.floor(Math.random() * 12) + 1;
    game.updateScore(0);
    //alert("#crystal-1 value is: " + randomNum.toString());
});

$("#crystal-2").on("click", function(){    
    //var randomNum = Math.floor(Math.random() * 12) + 1;
    game.updateScore(1);
    //alert("#crystal-2 value is: " + randomNum.toString());
});

$("#crystal-3").on("click", function(){
    //var randomNum = Math.floor(Math.random() * 12) + 1;
    game.updateScore(2);
    //alert("#crystal-3 value is: " + randomNum.toString());
});

$("#crystal-4").on("click", function(){
    //var randomNum = Math.floor(Math.random() * 12) + 1;
    game.updateScore(3);
    //alert("#crysta-4 value is: " + randomNum.toString());
});