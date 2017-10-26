
var start = document.getElementById("start");
var userName = "player";


start.onclick =  function () {
    var userName = prompt("what is your name");
    hide();
    function hide () {
    document.getElementById("start").style.display= "none";
    document.getElementById("second_page").style.display="block";
    }
}

var player = {
  name: userName,
  health: 40,
  wins: 0,
  healCount: 0,
  generateAttackDamage: function () {
    return (Math.floor((Math.random() * 3) + 1))
  },
  heal: function (){
    this.healthPoints += (Math.floor((Math.random() * 10) + 1))
  }
};

var grant = {
  name: "The Almighty Grant",
  health: 10,
  generateAttackDamage: function () {
    return (Math.floor((Math.random() * 3) + 1))
  }
};

var startAttack = document.getElementById("attack");
startAttack.onclick = function () {
  grant.health -= player.generateAttackDamage ();
  player.health -= grant.generateAttackDamage ();
  document.getElementById("playerspan").innerHTML=player.health;
  document.getElementById("grantspan").innerHTML=grant.health;
  document.getElementById("pb1").value = (player.health -= grant.generateAttackDamage ());
  document.getElementById("pb2").value = (player.health -= grant.generateAttackDamage ());
  console.log(grant.health, player.health);
}




/*var hideDisplay = document.getElementId("first_page");
el.style.display = "none";






/*var grantDeath = 0;

function startGame(answer) {
  if (answer === "yes") {
  playerName = prompt("What is your name, human?");
  startCombat( player.name );
    } else {
      console.log ("Begone!");
            }
}

var answer = prompt("Do you want to play a game with the Almighty Grant?");
startGame(answer);


function startCombat(playerName) {
        while (character.health > 0 && grant.health > 0 && grantDeath <3 && keepPlaying === "attack"|| "heal") {
        character.health -= grant.generateAttackDamage;
        grant.health -= character.generateAttackDamage;
        console.log( "Sad Human "+playerName+" has " +character.health+ " health points") ;
        console.log( "Almighty Grant has "+grant.health+" health points");
        if (grant <= 0) {
          character.wins++;
          grant=10;
          grantDeath++;
        }

        keepPlaying = prompt("Do you want to attack, quit, or heal?");
        if (keepPlaying === "quit") {
         console.log("goodbye");
         return;
        } else if (keepPlaying === "heal") {
           console.log ( "You've recieved "+character.heal+" heal points")
        }
        console.log( "Your wins:" +character.wins );

        if ( character.wins === 3) {
        console.log("You have defeated the Almighty Grant, Oh Great " +playerName+ ", I bow down to your glory!!");
          }else if (character.health <= 0) {
          console.log("You have lost," +playerName+ ", you puny human.");
          }
        }

var character= {

    name: "I am the best developer ever",
    health: 40,
    healCount: 0,
    wins: 0,

    generateAttackDamage: function(){
       return (Math.floor((Math.random() * 3) + 1));


        function heal () {
        if ( keepPlaying === "heal") {
            (Math.floor((Math.random() * 10) + 1)) + this.health;
            this.healCount++; }
                        }
                    }
                }

var grant= {

    name: "Almighty Grant",
    health: 10,
    generateAttackDamage: function(){
       return (Math.floor((Math.random() * 3) + 1));
}}
*/
