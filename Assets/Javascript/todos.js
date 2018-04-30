// Check off specific todos by clicking

$("ul").on("click", "li", function(){
	$(this).toggleClass("done");
});

// Click on X to delete todo

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
event.stopPropagation();	
});

// add todo

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// grabbing new todotext from input
		var todoText = $(this).val();
		$(this).val("");
		// put new todotext into new li
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+todoText+"</li>")
	}
});
$("#toggleForm").click(function () {
	$("input[type='text']").fadeToggle();
});