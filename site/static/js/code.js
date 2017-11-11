
$('.slides').on('init', function (slick) {
	showSlide(slick,0)
});

$('.slides').slick({
	centerMode: true,
    centerPadding: '40px',
    slidesToShow: 3,
	infinite: false,
	speed: 100,
    responsive: [
    	{
    		breakpoint: 768,
    		settings: {
    			slidesToShow: 1
    		}
    	}
    ]
    
});

$('.slides').on('beforeChange', function(){
	hideSlides();
});

$('.slides').on('afterChange', function(event,slick,slideNo){
	var slide = slick.$slides[slideNo];
	showSlide(slide, slideNo);
});

$('.slide-shortcut').click(function(){
	var shortcut = $(this);
	var link = shortcut.data('link-to');
	$('.slides').slick('slickGoTo',link);
});


function hideSlides(){
	$('.content').removeClass('active');
}

function showSlide(slide, slideNo){

	// deactive shortcuts
	$('.projects-shortcuts, .slide-shortcut').removeClass('active');

	if($(slide).hasClass('project-slide')){
		// show project shortcuts
		$('.projects-shortcuts').addClass('active');
		// highlight projects shortcut
		$('.slide-shortcut.projects-shortcut').addClass('active');
		// highlight category
		$('.slide-shortcut.project-'+$(slide).data('category')).addClass('active');
	}else{
		// highlight page shortcut
		$('.slide-shortcut[data-link-to="'+slideNo+'"]').addClass('active');
	}

	// show page content
	$('#content-' + slideNo).addClass('active');
}

$(document).ready(function() {
  $('.gallery .image').magnificPopup({
  	type:'image',
  	mainClass: 'mfp-with-zoom',
  	zoom: {
  		enabled: true,
  		
  	}
  });
});



// TODO


// mobile
// about page
// contact page
// templates

// contact form
// background slope
// animations
// gallery grouping