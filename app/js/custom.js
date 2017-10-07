
$(document).ready(function() {
	
	$(".sidebar_menu").hide();

	$(".toggle_menu").click(function(){

		$(".sidebar_menu").slideToggle( function() {
			if (!$(".sidebar_menu").is(":visible")){
			    $(".toggle_menu").removeClass("fa-times");
				$(".toggle_menu").addClass("fa-bars");
			}else{
				$(".toggle_menu").removeClass("fa-bars");
			    $(".toggle_menu").addClass("fa-times");
			}
		});

	})
});