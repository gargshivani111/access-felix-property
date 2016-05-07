console.log("main.js");
var winW = $(window).width();
$(function(){
	var glbFlgMblTrg = 0;
    $(".mobileTrigger").on('touchstart',function () {
        if (glbFlgMblTrg == 0) {
            TweenMax.to($(this).find('li.frst'), 0.3, {rotation: 45, y: 7});
            TweenMax.to($(this).find('li.scnd'), 0.3, {opacity: 0});
            TweenMax.to($(this).find('li.thrd'), 0.3, {rotation: -45, y: -7});
            $("header .navWrapper nav").slideDown();
            glbFlgMblTrg = 1
        }
        else {
            TweenMax.to($(this).find('li.frst'), 0.3, {rotation: 0, y: 0});
            TweenMax.to($(this).find('li.scnd'), 0.3, {opacity: 1});
            TweenMax.to($(this).find('li.thrd'), 0.3, {rotation: 0, y: 0});
            $("header .navWrapper nav").slideUp();
            glbFlgMblTrg = 0
        }
    });
	//Add function in mobile navigation
	if(winW < 768){
	$("header .navWrapper .topRight nav ul li a").on("touchstart", function(e){
		e.preventDefault();
		$(this).parent().find(".subNavWrapper").slideToggle();
		$(this).parent().toggleClass("active");
	});
	$("header .navWrapper .topRight nav ul li .subNavWrapper ul li a").on("touchstart", function(){
		$(this).parent().find("ul:eq(0)").slideToggle();
	});
	var corpNavFlag=0;
	$("header .topNav .topNavWrap .mobTxtWrap").on("touchstart",function(){
		if(corpNavFlag==0){
		$(this).addClass("active");
		$(this).parent().css({"height":"auto","overflow":"visible"});
		corpNavFlag=1;
		}
		else if(corpNavFlag==1){
		$(this).removeClass("active");
		$(this).parent().css({"height":"35px","overflow":"hidden"});
		corpNavFlag=0;
		}
	});
	}
	if(winW < 599){
	$("header .topNav .topNavWrap ul li a").on("touchstart",function(){
		$(this).parent().toggleClass("active");
		$(this).parent().find("ul").slideToggle();
	});
	}
	//Quick Nav 
	var quickNavFlag=0;
	$(".quickLinkWrapper").click(function(){
		if(quickNavFlag==0){
		$(this).height("auto");
		$("li.trigger").find("i").addClass("fa-minus");
		TweenMax.to($(this), 0.6, {right: 0});
		TweenMax.to($(".quickLinkWrapper ul li"), 0.6, {marginLeft: 0});
		quickNavFlag=1;
		}
		else if(quickNavFlag==1){
		$(this).height(70);
		$("li.trigger").find("i").removeClass("fa-minus");
		TweenMax.to($(this), 0.6, {right: -70});
		TweenMax.to($(".quickLinkWrapper ul li"), 0.6, {marginLeft: 150});	
		quickNavFlag=0;
		}
	});
	$(document).mouseup(function (e)
	{
		var container = $(".quickLinkWrapper");
		if (!container.is(e.target) && container.has(e.target).length === 0){
			container.height(70);
			$("li.trigger").find("i").removeClass("fa-minus");
			//TweenMax.to(container, 0.6, {right: -70});
			//TweenMax.to($(".quickLinkWrapper ul li"), 0.6, {marginLeft: 150});	
			quickNavFlag=0;
			$("header .topNav ul li:last-child ul").removeAttr("style");
		}
	});

	//Footer accordion in mobile device
	$("footer .col .heading").on("touchstart",function(){
		$(this).toggleClass("active");	
		$(this).next(".linkWrapper").slideToggle();
	});
	//Left Nav Accordion
	$(".twoColLeft .leftNavAccr.listingSubLink ul li a").click(function(){
		$(this).parent().toggleClass("active");
		$(this).parent().find("ul:eq(0)").slideToggle();
	});
	//remove + from li having no childs
	$(".listingSubLink li").each(function(){
	$('.listingSubLink li:not(:has(> ul))').addClass("hasNoSubLinks");
	});

	$(".featureClicker a").click(function(){
		$(this).toggleClass("active");
		$(this).parent().next().slideToggle();
		setTimeout('$(".testimonialsDiv").getNiceScroll().resize()',500)
		})
	//$(".testimonialsDiv ").niceScroll({touchbehavior:false,autohidemode:false,cursorborder:"", cursorcolor:"#7f7f7f"});	
	$(".expandAcc").click(function(){
		$(this).toggleClass("active");
		$(".twoColLeft").slideToggle();
		})
	$(".milestoneYears").click(function(){
		$(this).toggleClass("active");
		$(".milestoneTab").slideToggle();
		})
	/*$(".mediaVideo").fancybox({
		type:'iframe',
		padding:0
		});*/	
	//$(".mediaPrint").fancybox({padding:0});	
	if(winW>768){
	$(".rateProductWrapper").click(function(){
		$('html,body').animate({ scrollTop: 0 }, "slow");
		$("header .topNav ul li:last-child ul").show();
		});
	}
	//form validation
	$('form').each( function(){
    	$(this).validate({ 
		highlight: function(element) {
		$(element).addClass("validation-error");
	},
	unhighlight: function(element) {
		$(element).removeClass("validation-error");
	},
		errorPlacement: function(error,element) {
		return true;
	}
	});
	});
	//DOB
	//$( ".dob" ).datepicker({dateFormat: 'dd-mm-yy'});

});