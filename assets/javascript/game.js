$(document).ready(function() {

    // Initial Variables
    var computerPick = Math.floor(Math.random() * 4) + 1;
    var lockGame = false;
    var userText = document.getElementById("user-text");

    // We log the computer's pick to console to make it easier to troubleshoot
    console.log("Computer Pick: " + computerPick);

    // Next, we give JavaScript a function to execute when onkeyup event fires.
    document.onkeyup = function(event) {
    userText.textContent = event.key;
    };
// Here we create the keyup event that gets the user"s pick
    $(".btn-choice").on("click", function() {

      // Here this lockGame line prevents the user from changing the option after the game is done.
      if (lockGame !== true) {

        // We get the value associated with the button the user picked from here
        var yourPick = $(this).val();
        console.log("Your Pick: " + yourPick);

        // We then reveal the computer's pick in the html
        $("#computer-pick").text(computerPick);

        // If your pick matched the computer's pick you let them know.
        if (parseInt(yourPick) === computerPick) {
          $("#result").text("Yep! You got it! Refresh the page to play again.");
          lockGame = true;
        }

        // If the numbers did not match. You also let them know
        else {
          $("#result").text("Nope. Refresh the page to play again.");
          lockGame = true;
        }
      }

    });
  });

// Let's start by grabbing a reference to the <span> below.


