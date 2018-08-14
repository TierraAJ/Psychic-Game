    $(document).ready(function() {

      // Initial Variables
      var computerPick = document.getElementById("computer-pick")
      var userText = document.getElementById("user-text");
      var allText = document.getElementById("all-text");
     
      var wins = 0;
      var losses = 0;
      var guessesLeft = 10;
      
      
      var winsText = document.getElementById("wins-text");
      var lossesText = document.getElementById("losses-text");
      var guessesLeftText = document.getElementById("guesses-left-text");
      var allowedLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

      var lockGame = false;

      function computerChoice() {
        var random = Math.floor(Math.random() * allowedLetters.length);
        return allowedLetters[random];
      }
      
      var computerChose = computerChoice();
      console.log(computerChose);

      // Function to execute when onkeyup event fires to get user's pick.
      document.onkeyup = function(event) {
        userText.textContent = event.key;
        allText.textContent = event.key;
        computerChoseText.textContent = "The computer chose: " + computerChoice;
      }; 

      // Here we create the on click event that gets the user"s pick
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
        // Display the user and computer guesses, and wins/losses/ties.
        userText.textContent = "You chose: " + userText;
        computerPickText.textContent = "The computer chose: " + computerPick;
        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
        guessesLeftText.textContent = "ties: " + guessesLeft;
      });
    });
