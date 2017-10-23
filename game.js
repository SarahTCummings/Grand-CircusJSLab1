grant = 10
player = 40
wins = 0
var playerName;
var grantDeath = 0;
var keepPlaying = "attack"

var answer = prompt("Do you want to play a game with the Almighty Grant?");
startGame(answer);


function startGame(answer) {
  if (answer === "yes") {
  playerName = prompt("What is your name, human?"); 
  startCombat("Sarah");
    } else {
      console.log ("Begone!");
            }
}


function startCombat(playerName) {
        while (player > 0 && grant > 0 && grantDeath <3 && keepPlaying === "attack") {
        grant = grant - (Math.floor((Math.random() * 2) + 1)); 
        console.log("Almighty Grant has " +grant+ " health points");
        player = player- (Math.floor((Math.random() * 2) + 1));
        console.log("Sad Human " +playerName+ " has "+player+ " health points");
        if (grant <= 0) {
          wins++;
          grant=10;
          grantDeath++;
        }
        
        keepPlaying = prompt("Do you want to attack or quit?");
        if (keepPlaying === "quit") {
         console.log("goodbye"); 
         return; 
        }
        console.log( "Your wins:" +wins );
        
        if ( wins === 3) {
        console.log("You have defeated the Almighty Grant, Oh Great " +playerName+ ", I bow down to your glory!!");
          }else {
          console.log("You have lost," +playerName+ ", you puny human.");
          }
       
  
}}
