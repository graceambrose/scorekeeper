$(document).ready(function() {

  var score = 0

  $(document).on("click", "#increase-5", function() {
    $("#score").html((score += 5) + " Points");
  });

    $(document).on("click", "#decrease-5", function() {
      if (score >= 5){
      $("#score").html((score -= 5) + " Points");}
  });

    $(document).on("click", "#submit-custom-score", function() {

      var entry = parseInt($("#custom-score").val());
      score = entry;

      if (entry >=0){
      $("#score").html(entry + " Points");
    }

      else {
        alert("Your score must be positive!");
      }

    });
  });
