$(document).ready(function() {

  $(".menu a, .footer_menu a").click(function() {

    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;

    $("html,body").animate({
      scrollTop: destination
    }, 800);
    return false;
  });

  var hide = true;
  $(".show_all_logo").click(function(e){
    e.preventDefault();

    var el = $(".logo_hide");
    if (hide){
      el.css("display","flex");  
      hide = false;
      $(this).text("Hide");
    } else {
      var destination = $("#how_can").offset().top;
      $("html,body").animate({
        scrollTop: destination
      }, 0);
      el.hide();
      hide = true;
      $(this).text("Show all");
    }
    
  })

});