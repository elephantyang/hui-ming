$(document).ready(function(){
	var name = $("#user_name").val();
	var password = $("#password").val();

	$("#btn-submit").click(function(){
		$("#user_name").val("");
		$("#password").val("");
		window.location.href = "首页.html";	
	});
});