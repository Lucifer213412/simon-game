# simon-game
This project is a web-based version of the classic Simon game, where the player needs to remember and repeat a sequence of colors. The game gets progressively harder as the player advances to higher levels. The game is implemented using HTML, CSS, and JavaScript with jQuery for handling DOM manipulations and event listeners.


Simon Game
This project is a web-based version of the classic Simon game, where the player needs to remember and repeat a sequence of colors. The game gets progressively harder as the player advances to higher levels. The game is implemented using HTML, CSS, and JavaScript with jQuery for handling DOM manipulations and event listeners.

Table of Contents:-

Game Rules
Project Structure
How It Works
Features
Technologies Used

Game Rules:-
Press any key to start the game.
Watch the sequence of colors that light up.
Click the buttons in the same sequence as shown.
If you get the sequence right, the game will add another color to the sequence.
If you get the sequence wrong, the game will end and prompt you to restart.

Project Structure:-
The project consists of the following files:

index.html: The main HTML file that contains the game layout.
styles.css: The CSS file for styling the game.
game.js: The JavaScript file that contains the game logic.

How It Works:-
JavaScript Code
The game logic is implemented in the game.js file. Here's an overview of how it works:

Variables: Several variables are declared to store game data, including buttonColors, gamePattern, userChosenPattern, started, and level.

javascript
Copy code
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userChosenPattern = [];
var started = false;
var level = 0;
Starting the Game: The game starts when any key is pressed. This is detected using the keydown event.
User Clicks: When a button is clicked, the user's chosen color is stored and checked against the game pattern.

(".btn").click(function () {
    var userChosenColor = $(this).attr("id");
    userChosenPattern.push(userChosenColor);

playSound(userChosenColor);
animatePress(userChosenColor);

checkAnswer(userChosenPattern.length - 1);
});
Checking the Answer: The checkAnswer function compares the user's input with the game pattern. If the user gets it right, the game continues to the next level. If not, the game ends.


function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userChosenPattern[currentLevel]) {
        if (gamePattern.length === userChosenPattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        playSound("wrong");
        ("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 300);
        ("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}
Generating the Next Sequence: The nextSequence function generates a new color in the sequence and plays the corresponding sound and animation.


function nextSequence() {
    userChosenPattern = [];
    level++;
    ("#level-title").text("Level " + level);

var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}
Playing Sounds and Animations: The playSound and animatePress functions handle playing the sound for each button and animating the button press.


function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor) {
    ("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        ("#" + currentColor).removeClass("pressed");
    }, 100);
}
Restarting the Game: The startOver function resets the game variables to their initial states.

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}


Features:-
Interactive and engaging gameplay.
Dynamic difficulty that increases as the player progresses.
Visual and audio feedback for user actions.
Technologies Used
HTML: For structuring the web page.
CSS: For styling the game elements.
JavaScript: For game logic.
jQuery: For DOM manipulation and event handling.
Enjoy the game and have fun testing your memory skills!
