$(document).ready(function() {
  $(".clickable").click(function() {
    $("#init-showing").fadeToggle();
    $("#init-hidden").fadeToggle();
  })
})