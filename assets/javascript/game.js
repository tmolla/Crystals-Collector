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
        this.losses += 1;
        $("#losses").text("Losses: " + this.losses.toString());
    },
    
    
    resetCrystalValues: function(){
        for (var i=0; i<this.numberOfCrystals; i++){
            this.crystal[i] = Math.floor(Math.random() * 12) + 1;
        };
    },


    updateScore: function(index){
        this.totalScore += this.crystal[index];
        $("#total-score").text( this.totalScore.toString());
        if(this.totalScore > this.targetScore){
            this.updateLosses();
            this.resetGame()
        }
        if(this.totalScore == this.targetScore){
            this.updateWin();
            this.resetGame()
        };
    },

    resetGame: function(){
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
    game.updateScore(0);
});

$("#crystal-2").on("click", function(){    
    game.updateScore(1);
});

$("#crystal-3").on("click", function(){
    game.updateScore(2);
});

$("#crystal-4").on("click", function(){
    game.updateScore(3);
});
