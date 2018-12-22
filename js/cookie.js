(function($) {
$(function() {

if (!$.cookie('was')) {
	//var delay_popup = 5000;
    $("#cookie").show();
    //alert("111");
}
		
$(".cookie_link").click(function(e){
	e.preventDefault();
	$("#cookie").hide();
	$.cookie('was', true, {
	    expires: 365,
	    path: '/'
	});

})
            

})
})
(jQuery)