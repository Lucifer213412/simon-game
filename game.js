var buttoncolor=["red","blue","green","yellow"];

var gamePattern=[];
var userChoosenPattern=[];

var started=false;
var level=0;

$(document).keydown(function(){
     if(!started){
          $("#level-title").text("Level "+level);
          nextSequence();
          started= true;
     }
});

$(".btn").click(function(){

     var userChoosenColor=$(this).attr("id");
     userChoosenPattern.push(userChoosenColor);

     playSound(userChoosenColor);
     animatePress(userChoosenColor);

     checkAnswer(userChoosenPattern.length-1);



});
function checkAnswer(curentLevel){
    if(gamePattern[curentLevel]===userChoosenPattern[curentLevel]) 
     {
          console.log("success");
     
          if(gamePattern.length===userChoosenPattern.length)
          {
               setTimeout(function()
             {
               nextSequence();
               
             }, 1000);
          }

     }
          else
           {
               console.log("wrong");

               playSound("wrong");

               $("body").addClass("game-over");
              
               setTimeout(function()
               {
                $("body").removeClass ("game-over");
              }, 300);

               $("h1").text("Gameover, Press any key to restart the game");

               //startOver();
               
           }
     console.log(gamePattern);
     console.log(userChoosenPattern);   
          }





function nextSequence(){

     userChoosenPattern=[];
     
      level++;
      $("#level-title").text("Level " + level);   


     var randomNumber=Math.floor(Math.random()*4);
    
     var randomChoosenColor=buttoncolor[randomNumber];
     gamePattern.push(randomChoosenColor);

     $("#" + randomChoosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
     playSound(randomChoosenColor);
  


}
 
function playSound(name)
{
     var audio= new Audio("sounds/"+name+".mp3");
     audio.play();
}
function animatePress (currentColor) {
      
     $("#" + currentColor).addClass("pressed");

     setTimeout(function(){
          $("#" + currentColor).removeClass("pressed");
},100);
}

function startOver(){
     level=0;
     gamePattern=[];
     started=false;


}




