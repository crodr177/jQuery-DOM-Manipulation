$(document).ready(function() {
  //challenge 1
  $("#accordion").on("click", "h2", function() {
    $(".quote").removeClass("show")
    $(this).find("+ .quote").addClass("show")
  })

})