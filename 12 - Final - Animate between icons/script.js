$(function() {
  
  $(".menu-link").click(function(e) {
    e.preventDefault();
    $(".menu").toggleClass("open");
    $(".menu-overlay").toggleClass("open");
  });

});
