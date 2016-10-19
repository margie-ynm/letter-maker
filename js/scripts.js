$(document).ready(function() {

  $("#inputForm form").submit(function(event) {
    var nameInput = $("#name").val();
    var locationInput = $("#location").val();
    
    $(".name").text(nameInput);
    $(".location").text(locationInput);
    $(".letterOutput").show();

    event.preventDefault();
  });
});
