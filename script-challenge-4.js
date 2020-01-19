$(document).ready(function() {
 

 	$("#button_effects1").mouseenter(function() {
 		$('#paragraph_effects1').fadeTo(1000, 0.5);
 	});
 		$("#button_effects1").mouseleave(function() {
 		$('#paragraph_effects1').fadeTo(1000, 1);
 	});
 	$("#button_effects2").click(function() {
 		$('#paragraph_effects2').slideToggle('slow');
	});
	
}); 
