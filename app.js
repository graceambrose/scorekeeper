$(document).ready(function() {

  var score = 0;

  $(document).on("click", "#increase-5", function() {
    //Step 1: Add 5 to score variable
    //Step 2: Represent the new score on the UI
    $("#score").html((score += 5) + " Points");
  });

    //Step 1: Subtract 5 to score variable
    //Step 2: Represent the new score on the UI
    $(document).on("click", "#decrease-5", function() {
      if (score >= 5){
      $("#score").html((score -= 5) + " Points");}
  });

      //Bind Click Event to Button
    $(document).on("click", "#submit-custom-score", function() {

      var entry = parseInt($("#custom-score").val());
      score = entry;
      //Added comment
      if (entry >=0){
      $("#score").html(entry + " Points");
    }

      else {
        alert("Your score must be positive!");
      }

    });
  });
