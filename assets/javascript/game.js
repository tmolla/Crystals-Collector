var game = {
    targetScore: 0,
    totalScore: 0,
    wins: 0,
    losses: 0,
    numberOfCrystals:4,
    crystal: [],
    

    resetWins: function(){
        this.wins = 0;
        $("#win").text("Wins: " + this.wins.toString())
    },


    resetLosses: function(){
        console.log("in reset loss");
        this.losses = 0;
        $("#losess").text("Losses: "+ this.losses.toString())
    },


    resetTotalScore: function(){
        this.totalScore = 0;
        $("#total-score").text(this.totalScore.toString())
    },


    resetTargetScore: function(){
        this.targetScore = Math.floor(Math.random() * 120) + 19;
        $("#randomNum").text(this.targetScore.toString());
    },
    
    
    updateWin: function(){
        this.wins +=1;
        $("#win").text("Wins: " + this.wins.toString());
    },


    updateLosses: function(){
        console.log("in updateLosses");
        this.losses += 1;
        $("#losses").text("Losses: " + this.losses.toString());
    },
    
    
    resetCrystalValues: function(){
        for (var i=0; i<this.numberOfCrystals; i++){
            this.crystal[i] = Math.floor(Math.random() * 12) + 1;
            console.log(this.crystal[i]);
        };
    },


    updateScore: function(index){
        //console.log("index " + index.toString());
        //console.log("value of crystal " + this.crystal[index]);
        this.totalScore += this.crystal[index];
        $("#total-score").text( this.totalScore.toString());
        if(this.totalScore > this.targetScore){
            //alert(">");
            this.updateLosses();
            this.resetGame()
        }
        if(this.totalScore == this.targetScore){
            //alert("=");
            this.updateWin();
            this.resetGame()
        };
    },

    resetGame: function(){
        console.log("in resetGame")
        this.resetCrystalValues();
        this.resetTotalScore();
        this.resetTargetScore();
    },

    initializeGame: function() {
        this.resetCrystalValues();
        this.resetWins();
        this.resetLosses();
        this.resetTotalScore();
        this.resetTargetScore();
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