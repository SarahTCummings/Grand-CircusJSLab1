grant = 10
player = 40
wins = 0

var startGame = prompt("Do you want to play a game with the Almighty Grant?"); 
if (startGame === "yes") {
    var playerName = prompt("What is your name, human?"); 
      for (var grantDeath = 0; grantDeath <3; grantDeath++ ) {  

        while (player > 0 && grant > 0) {
        grant = grant - (Math.floor((Math.random() * 2) + 1)); console.log("Almighty Grant has " +grant+ " health points");
        player = player- (Math.floor((Math.random() * 2) + 1));console.log("Sad Human " +playerName+ " has "+player+ " health points");
          }
        
        if (grant <=0) {
        wins++; 
        grant=10;
          } 

        console.log( "Your wins:" +wins )
          }

    if ( wins = 3) {
    console.log("You have defeated the Almighty Grant, Oh Great " +playerName+ " I bow down to your glory!!")
      } else {
    console.log("You have lost," +playerName+ ", you puny human.");
      }}
  
else {
  console.log ("Begone!");
}