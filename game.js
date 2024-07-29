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
     checkAnswer(userChoosenColor.length-1);
     nextSequence();



});



function nextSequence(){
      level++;
      $("#level-title").text("Level " + level);   


     var randomNumber=Math.floor(Math.random()*4);
    
     var randomChoosenColor=buttoncolor[randomNumber];
    gamePattern.push(randomChoosenColor);
    $("#" + randomChoosenColor).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(110).fadeIn(100);
   // var audioo = new Audio("sounds/"+randomChoosenColor+".mp3");
     //audioo.play();
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
function checkAnswer(curentLevel){
     if(gamePattern[curentLevel]===userChoosenPattern[curentLevel]){
          console.log("success");
          }
          else{
               console.log("wrong");
     }

}



