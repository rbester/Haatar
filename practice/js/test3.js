$(function(){
	$("blockquote").on("click", function(){
		$(this).toggleClass('wrap');
	});
});





$(document).ready(function() { 
  $('#tour').on('click', 'button', function() { 
    $('.photos').slideToggle();
  });
  function showPhotos() {
    $(this).find('span').slideToggle();
  }
  $('.photos').on('mouseenter', 'li', showPhotos).on('mouseleave', 'li', showPhotos);
});


$(document).ready(function() {
  $('.see-photos').on('click', function(event) {
    event.stopPropagation();
    event.preventDefault();
    $(this).closest('.tour').find('.photos').slideToggle();
  });
  $('.tour').on('click', function() {
    alert('This should not be called');
  });
});