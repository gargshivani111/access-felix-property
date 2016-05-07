$(document).ready(function(){
    //alert("My JS");
	console.log($('.spotlightWrapper'));
    console.log($('.spotlightWrapper .slick-slider'));

    $('.spotlightWrapper .slick-slider').slick({
		dots: true,
		arrows:false,
		slidesToShow: 3,
        slidesToScroll: 3,
		responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
	});

});
