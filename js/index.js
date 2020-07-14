$(document).ready(function(){
	$('.navbar-nav .nav-item').click(function(){
	    $('.navbar-nav .nav-item').removeClass('active');
	    $(this).addClass('active');
	})

	$('#myModal').on('shown.bs.modal', function () {
	  	$('#myInput').trigger('focus')
	})
});