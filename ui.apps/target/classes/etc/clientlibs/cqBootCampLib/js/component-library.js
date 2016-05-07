var winW = $(window).width();
$(function(){
	$(".accordionWrapperGlbl .head").click(function(){
		$(this).next(".content").slideToggle()
		.siblings(".content:visible").slideUp();
		if($(this).find("i").html()=="-"){
		$(this).find("i").html("+");
		}
		else if($(this).find("i").html()=="+"){
		$(this).find("i").html("-");
		}
		$(this).siblings(".head").find("i").html("+");
	});
	//Tab to accordion script
        $('#parentHorizontalTab').easyResponsiveTabs({
           type: 'default',
            width: 'auto',
            fit: true,
            tabidentify: 'hor_1', 
            activate: function(event) {
                var $tab = $(this);
                var $info = $('#nested-tabInfo');
                var $name = $('span', $info);
                $name.text($tab.text());
                $info.show();
            }
    });
	//Global Tipsy
	$('.tipsyGlbl').tipsy({gravity: $.fn.tipsy.autoBounds(150, 'n'), html: true });
	//Content slider
	$('.contentSliderWrapper .slick-slider').slick({
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