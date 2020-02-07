$(document).ready(function() {
	$("p").click(function() {
		$("p").addClass("clickable");
	});

	$("button#dark-mode").click(function() {
		// $("body").removeClass();
		$("body").toggleClass("dark-mode");   
	});
});