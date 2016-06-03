
//HEADER SCROLL FIXED
$(document).ready(function () {
	var windowHeight = $(window).height();
	var windowWidth = $(window).width();
	var navWidth = $(window).width();
    var $header = $("header"), $clone = $header.before($header.clone().addClass("clone"));
	var extUrl = 'http://projectshowcase.in/brvlaunch/exterior/';
	$('#mobilemenu').slicknav();
	onResize();
	$(window).resize(function(){
		onResize();
	});
	$('.slicknav_nav li').click(function() {
		var target = $(this).children().attr('href');
		if(target == '#exterior') {
			openExt();
		}
		if(target == '#interior') {
			openInt();
			target = '#exterior';
			window.location.hash = target;
		}
		if(target == '#features') {
			target = '#specification';
			// Add active class to section title
			$('a[href=#accordion-7]').addClass('active');
			// Open up the hidden content panel
			jQuery('.accordion #accordion-7').slideDown(300).addClass('open');
			$('#accordion-7').parent().find('.plus').attr('src', 'images/minus.png').removeClass('plus').addClass('minus');
			window.location.hash = target;
		}
		$('.slicknav_nav').addClass('slicknav_hidden').hide();
		$('.slicknav_btn').removeClass('slicknav_open').addClass('slicknav_collapsed');
	});
	//SLIDE SECTION JS
	$("img[src='images/blank.jpg'],img[src='images/blankcar.jpg']").each(function(){
		var datasrc = $(this).attr('data-src');
		var datamobile = $(this).attr('data-mobile');
		if(windowWidth > 800) {
			$(this).attr('src', "");
			$(this).attr('src', datasrc);
		}else{
    		$(this).attr('src', "");
			$(this).attr('src', datamobile);
		}
	});
	var boxWidth = $(".slideG_content").width();
	$(".closeSlide").click(function(e){
		e.preventDefault();
		$(".slideG_content").animate({width: 0});
	});
    $(".slideG").click(function(){
		var cnt = $(this).attr('id').replace('slide', '');
		if(windowWidth > 800) {
			$('#slideMainImg').attr('src', '').attr('src', 'images/slide_large'+cnt+'.jpg');
		} else {
			$('#slideMainImg').attr('src', '').attr('src', 'images/mobile/slide_large'+cnt+'.jpg');
		}
		$(".slideG_content").animate({
			width: windowWidth
		});
	});
	if(windowWidth > 800) {
		$('#intiframe').css({'width': windowWidth+'px', 'height': windowHeight+'px', 'position': 'absolute', 'top': '-145px', 'z-index': '-1' });
	} else {
		$('#intiframe').css({'width': windowWidth+'px', 'height': '250px', 'position': 'absolute', 'top': '-114px', 'z-index': '-1' });
	}
	$('#color_change').click(function() {
		$('.colour').show();
		$('.interior').hide();
		$('#intiframe').hide();
		$('#extiframe').hide();
		$('#exterior').addClass('bg1');
		$('.exterior_bottom_section').hide();
		$('.exterior_car_section_nav ul li a').removeClass("black").removeClass('activeNav');
		$(this).addClass('activeNav');
	});
	function openExt() {
		$('.colour').hide();
		$('.interior').show();
		$('#intiframe').hide();
		$('#extiframe').show().attr('src' , extUrl);
		$('.exterior_bottom_section').show();
		$('#exterior').addClass('bg1');
		$('.exterior_car_section_nav ul li a').removeClass("black").removeClass('activeNav');
		$('#exterior_rotate').addClass('activeNav');
	}
	function openInt() {
		$('.colour').hide();
		$('.interior').show();
		$('#extiframe').hide();
		$('#exterior').removeClass('bg1');
		$('#intiframe').show().attr('src' , 'http://projectshowcase.in/brvlaunch/interior/');
		$('.exterior_bottom_section').hide();
		$('.exterior_car_section_nav ul li a').addClass("black").removeClass('activeNav');
		$('#interior_rotate').addClass('activeNav');
	}
	$('#exterior_rotate').click(function() {
		openExt();
	});
	$('#interior_rotate').click(function() {
		openInt();
	});
	$('.spec_drop').click(function() {
		$('#spec_fuel').slideToggle();
	});
	$('#accordion-1 .disel,#accordion-2 .disel,#accordion-4 .disel,#accordion-5 .disel,#accordion-6 .disel').show();
	$('#accordion-1 .petrol,#accordion-2 .petrol,#accordion-4 .petrol,#accordion-5 .petrol,#accordion-6 .petrol').hide();
	$('#spec_fuel li').click(function() {
		var fuelType = $(this).text();
		$('.spec_drop span').text(fuelType);
		$('#spec_fuel').slideToggle();
		if(fuelType == "Diesel") {
			$('#accordion-1 .disel,#accordion-2 .disel,#accordion-4 .disel,#accordion-5 .disel,#accordion-6 .disel').hide();
			$('#accordion-1 .petrol,#accordion-2 .petrol,#accordion-4 .petrol,#accordion-5 .petrol,#accordion-6 .petrol').show();
		} else {
			$('#accordion-1 .disel,#accordion-2 .disel,#accordion-4 .disel,#accordion-5 .disel,#accordion-6 .disel').show();
			$('#accordion-1 .petrol,#accordion-2 .petrol,#accordion-4 .petrol,#accordion-5 .petrol,#accordion-6 .petrol').hide();
		}
	});
	$(".slideG_inner").css('width',windowWidth);
	$('.arrow_right').click(function() {
		var cslide = parseInt($('#currSlide').text());
		if(cslide <= 2) {
			$('.gallery_slider').animate({'margin-left': '-='+windowWidth},300);
			cslide += 1;
			$('#currSlide').text(cslide);
		}
	});
	$('.arrow_left').click(function() {
		var cslide = parseInt($('#currSlide').text());
		if(cslide > 1) {
			$('.gallery_slider').animate({'margin-left': '+='+windowWidth},300);
			cslide -= 1;
			$('#currSlide').text(cslide);
		}
	});
	$('#kk_ar_right').click(function() {
		var arwidth = $('.gallery_right').width();
		var cslide = parseInt($('#currarSlide').text());
		if(cslide <= 23) {
			$('.kkslider').animate({'margin-left': '-='+arwidth},300);
			cslide += 1;
			$('#currarSlide').text(cslide);
		}
	});
	$('#kk_ar_left').click(function() {
		var arwidth = $('.gallery_right').width();
		var cslide = parseInt($('#currarSlide').text());
		if(cslide > 1) {
			$('.kkslider').animate({'margin-left': '+='+arwidth},300);
			cslide -= 1;
			$('#currarSlide').text(cslide);
		}
	});
	$('#kk_v_right').click(function() {
		var arwidth = $('.gallery_right').width();
		var cslide = parseInt($('#currvSlide').text());
		if(cslide <= 1) {
			$('.kkvideocontainer ul').animate({'margin-left': '-='+arwidth},300);
			cslide += 1;
			$('#currvSlide').text(cslide);
		}
	});
	$('#kk_v_left').click(function() {
		var arwidth = $('.gallery_right').width();
		var cslide = parseInt($('#currvSlide').text());
		if(cslide > 1) {
			$('.kkvideocontainer ul').animate({'margin-left': '+='+arwidth},300);
			cslide -= 1;
			$('#currvSlide').text(cslide);
		}
	});
	$('.numbers div').click(function() {
		var cslide = parseInt($('#currSlide').text());
		var nslide = parseInt($(this).text());
		if(cslide != nslide) {
			$('.gallery_slider').animate({'margin-left': -(windowWidth*(nslide-1))},300);
			cslide = nslide;
			$('#currSlide').text(cslide);
		}
	});
	$('.givecallBtn').click(function(e) {
		e.preventDefault();
	});
	$('.givecallBtn').hover(function() {
		$('#callBTN').hide();
		$('#noBTN').show();
	}, function() {
		$('#callBTN').show();
		$('#noBTN').hide();
	});
if(windowWidth > 800) {
    $(window).on("scroll", function () {
        var fromTop = $(window).scrollTop();
        $("body").toggleClass("down", (fromTop > 100));
    });
	$(".blackShade").mouseenter(function(){
		$(this).css("opacity",0);
	});
	$(".blackShade").mouseleave(function(){
		$(this).css("opacity",1);
	});
	
	//smoothscroll
    $('nav ul li a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        
        $('nav ul li').each(function () {
            $(this).removeClass('activemenu');
        })
        $(this).parent().addClass('activemenu');
      	var target = this.hash;
		if(target == '#exterior') {
			openExt();
		}
		if(target == '#interior') {
			openInt();
			target = '#exterior';
		}
		if(target == '#features') {
			target = '#specification';
			// Add active class to section title
			$('a[href=#accordion-7]').addClass('active');
			// Open up the hidden content panel
			jQuery('.accordion #accordion-7').slideDown(300).addClass('open');
			$('#accordion-7').parent().find('.plus').attr('src', 'images/minus.png').removeClass('plus').addClass('minus');
		}
        $target = $(target);
		//console.log('scrollTop : ' + $target.offset().top+2);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
        });
    });
} else {
	
}
	
	function onResize() {
		if(windowWidth > 800) {
			$(".mainContent").css('height',windowHeight-70);
			$("#home").css('height',windowHeight);
			$("#exterior").css('height',windowHeight);
			$("#interior").css('height',windowHeight);
			$("#engine").css('height',windowHeight);
			$("#safety").css('height',windowHeight);
			$("#grade").css('height',windowHeight);
			$("#hondaconnect").css('height',windowHeight);
			$("#accessories").css('height',windowHeight);
			$("#features").css('height',windowHeight);
			$("#specification").css('height',windowHeight);
			$("#gallery").css('height',windowHeight);
			$("#enquiryform").css("height",$(".lethunt").css('height') - 4);
			//SAFETY SECTION
			$(".safety_box").css("width",(windowWidth/4)-42);
			$(".safety_box").css("height",$(".safety_bottom").height());
		
			//ENGINE SECTION
			$(".engine_panel_img img").css("width",$(".engine_panel_img").width());
			$(".engine_panel_img img").css("height",$(".engine_panel").height());
			$(".engine_sec_left_bot").css("height",($(".engine_panel").height()*2) - $(".engine_sec_left_top").height());

			//ACCESSORIES SECTION
			$(".access_box").css("height",$(".access_bottom").height());
			//Gallery Section
			$(".gallery_top_img").css("height",$(".mainContent").height()/2);
			//COLOR Section
			$(".color_change_area ul li").css("width",161);
			$(".color_change_area").css("width",1126);
		} else {
			$(".slideG_content").css("height",$("#slideGallery").height());
		}
		
		//GALLERY SECTION
		$('.mainSlider,.gallery_container').css("width",windowWidth);
		$('.gallery_slider').css("width",windowWidth*3);
		
		var kkwidth = $('.gallery_right').width();
		$('.kkslider li,.kkcontainer,.kkvideocontainer').css("width", kkwidth);
		$('.kkslider').css("width", kkwidth*24);
		$('.kkvideocontainer ul').css("width", kkwidth*2);
		$('.kkvideocontainer ul li,.kkvideocontainer ul li img').css("width", kkwidth/2);
		
		//COLOR CHANGE JS
		if(windowWidth > 1000) {
			extUrl = 'http://projectshowcase.in/brvlaunch/exterior/';
			$('#extiframe').css({'width': '1000px', 'height': '500px', 'margin-left': (windowWidth-1000)/2+'px'});
		} else {
			extUrl = 'http://projectshowcase.in/brvlaunch/exterior_mobile/';
			$('#extiframe').css({'width': '300px', 'height': '250px', 'margin-left': (windowWidth-300)/2+'px'});
		}
		$(".color_change_area ul li img").click(function() {
			var clritem = $(this).attr("src");
			if(windowWidth > 800) {
				clritem = clritem.replace('images/color_', '');
				clritem = clritem.replace('.png', '');
				$(".car_colors img").attr("src","");
				$('.car_colors img').attr('src',"images/carColor/"+clritem+".png");
			} else {
				clritem = clritem.replace('images/mobile/color', '');
				clritem = clritem.replace('.png', '');
				$(".car_colors img").attr("src","");
				$('.car_colors img').attr('src',"images/carColor/"+clritem+"_mobile.png");
			}
		});
	
		var bhgt = 0;
		//var ext = '';
		$('section').each(function() {
			bhgt = bhgt + $(this).height();
			//ext += $(this).attr('id')+": "+ $(this).height() + ', ';
		});
		bhgt = bhgt + $('footer').height();
		//ext += $('footer').height();
		$('body').css('height', bhgt);
	}
});