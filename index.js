$(document).ready(function () {
	//localStorage.removeItem("list");
	$("#list-items").html(localStorage.getItem("list"));
    $('.add-items').submit(function(event){
    	event.preventDefault();
    	var text=$('#todo-list-item').val();
    	if (text){
    		$('#list-items').append("<li><input class='checkbox' type='checkbox'/>"+ text + "<a class='remove'>x</a><hr></li>");
    		localStorage.setItem("list",$("#list-items").html());
    		$('#todo-list-item').val("");
    	}
    	else
    	{
    	alert("Empty Input");
    	}
    });
    //this is how u target dynamically created elements like checkbox.
    $(document).on("change",".checkbox",function(){
    	if($(this).attr("checked")){
    		$(this).removeAttr("checked");
    	}
    	else{
    	$(this).attr("checked","checked");
    	}
		$(this).parent().toggleClass('completed');
		localStorage.setItem("list",$("#list-items").html());
    });
    $(document).on("click",".remove",function(){
    	$(this).fadeOut("slow",function(){
    		$(this).parent().remove();
    		localStorage.setItem("list",$("#list-items").html());
    	});
    });
});
