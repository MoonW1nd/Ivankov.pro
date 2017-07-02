//alert( window.innerWidth ); // вся ширина окна
//alert( document.documentElement.clientHeight );
//document.querySelector('.wrapper').style.offsetHeight = document.documentElement.clientHeight;
/* var f = document.querySelector('.wrapperAi');
window.onload = function() {
	var h = document.documentElement.clientHeight;
	f.style.height = h+"px";
}*/
var pIndex;
var massiveForm = ['input[name="name"]','input[name="email"]','textarea[name="message"]'];
// preloader
jQuery(document).ready(function($) {
  $(window).on('load',function() {
  caseMenu(pIndex);
    setTimeout(function() {
      $('#preloader').fadeOut('slow', function() {});
    }, 2000);

  });
});
////

var f = document.querySelectorAll('.wrapper');
var i;
	window.onload = function takeHeight() {
	var h = document.documentElement.clientHeight;
	for (i=0;i<f.length;i++)
	{
		f[i].style.height = h+"px";
	}
	}
function restartAnimation (selector) {
	var el = selector;
	newone = el.clone(true);
	el.before(newone);
	el.remove();
}
$(document).ready(function() {
// //validate form
// 	var validName = false;
// 	var validEmail = false;
// 	var validMassege = false;
// 	$('form').submit(function(event){
// 		event.preventDefault();
// 		var name = $("#name").val();
// 		var email = $("#email").val();
// 		var massege = $("#massege").val();
// 		if(name == "") {

// 		}else{
// 			validName = true;
// 		}
// 		if(email == "") {

// 		}else{
// 			validEmail = true;
// 		}
// 		if(massege == "") {

// 		}else{
// 			validMassege = true;
// 		}
// 		if(validName == true && validEmail == true) {
// 			$("form").unbind('submit').submit();
// 		} 
// 	});
	//ajax-------
	$('.formSubmit').click(function(event) {
		event.preventDefault();
		var inpName=$('input[name="name"]');
		var inpEmail=$('input[name="email"]');
		var inpMessage=$('textarea[name="message"]');
		function removeAllClass () {
			inpName.removeClass("shake");
			inpEmail.removeClass("shake");
			inpMessage.removeClass("shake");
		}
		$.post(
			"php/check.php", 
			{
				name: $('[name="name"]').val(),
				email: $('[name="email"]').val(),
				message: $('[name="message"]').val()
			}, function(data){
				var result = parseInt(data);
				switch(result) {
					case 1: $('.result').html("Введите имя");
							removeAllClass ();
							inpName.addClass("shake");restartAnimation(inpName);break;
					case 2: $('.result').html("Введите email");
							removeAllClass ();
							inpEmail.addClass("shake");restartAnimation(inpEmail);break;
					case 3: $('.result').html("Введите сообщение");
							removeAllClass ();
							inpMessage.addClass("shake");restartAnimation(inpMessage);break;
					case 4: $('.result').html("Мы не знаем такого имени :)");
							removeAllClass ();
							inpName.addClass("shake");restartAnimation(inpName);break;
					case 5: $('.result').html("Введите коректный email");
							inpEmail.addClass("shake");restartAnimation(inpEmail);break;
					case 6: $('.result').html("Введите сообщение побольше");
							removeAllClass ();
							inpMessage.addClass("shake");restartAnimation(inpMessage);break;
					case 7: $('.result').html("Сообщение успешно отправлено").css("color", "green");
							removeAllClass ();break;
					case 12: $('.result').html("Заполните пустые поля");
							removeAllClass ();
							inpName.addClass("shake");restartAnimation(inpName);
							inpEmail.addClass("shake");restartAnimation(inpEmail);break;
					case 13: $('.result').html("Заполните пустые поля");
							removeAllClass ();
							inpName.addClass("shake");restartAnimation(inpName);
							inpMessage.addClass("shake");restartAnimation(inpMessage);break;
					case 23: $('.result').html("Заполните пустые поля");
							removeAllClass ();
							inpEmail.addClass("shake");restartAnimation(inpEmail);
							inpMessage.addClass("shake");restartAnimation(inpMessage);break;
					case 123: $('.result').html("Заполните пустые поля");
							removeAllClass ();
							inpName.addClass("shake");restartAnimation(inpName);
							inpEmail.addClass("shake");restartAnimation(inpEmail);
							inpMessage.addClass("shake");restartAnimation(inpMessage);break;

				}
			});
		});
	//--------------
	$(".main").onepage_scroll();
	$(".humburger").click(function() {
		$(".humburger").toggleClass("active");
		$(".spskUl").toggleClass("active");
		$(".Menu nav").toggleClass("active");
		$("#Main").toggleClass("active");
		$("#about").toggleClass("active");
		$("#education").toggleClass("active");
		$("#IDo").toggleClass("active");
		$("#skill").toggleClass("active");
		$(".portfolioMain").toggleClass("active");
		$("footer").toggleClass("active");
	});
	$('.wrapper').click(function(){
		if($('nav').hasClass('active')===true){
			$(".humburger").toggleClass('active');
			$("nav").toggleClass('active');
			$(".spskUl").toggleClass("active");
			$("#Main").toggleClass("active");
			$("#about").toggleClass("active");
			$("#education").toggleClass("active");
			$("#IDo").toggleClass("active");
			$("#skill").toggleClass("active");
			$(".portfolioMain").toggleClass("active");
			$("footer").toggleClass("active");
		}
	});
	// $(".spsk").click(function(){
	// 	$(this).addClass("actv")	})
});

//
var w = document.documentElement.clientWidth; //ширина график
var h = document.documentElement.clientHeight; //высота графика
if(w>h){
		 w*=0.55; //ширина график
		 h*=0.85; //высота график
	}
	else
	{
		w*=0.85; //ширина график
		h*=0.55; //высота график
	}
		var wGraph = w*0.68;//место под график
		var wText = w*0.3;//место под текст
		var wTxt = wText - 10;//отступ текста от грфика
		var dataset = [95, 85, 70, 50, 80 , 90, 40];
		var skillName = ["HTML5/CSS3", "JavaScript", "JQuery" , "PHP", "Illustrator", "Photoshop", "MySQL"]
		var barPadding = h*0.06;//отступы
		var hmargin=h*0.03;//отступы сверху и снизу
		var hgraph=h-hmargin*2;
		var svg = d3.selectAll("#skill")
					.append("svg")
					.attr("width", "56%")//размер окна
					.attr("height", "85%");
		var yAxisLength = h -  barPadding;
		var xScale = d3.scaleLinear()
						.domain([0, 100])
						.range([0, wGraph]);
		svg.selectAll("text") //написание текста
			.data(skillName)
			.enter()
			.append("text")
			.text (function(d){
				return d;
			})
			.attr("x", wTxt)
			.attr("y", function(d,i) {
				return (i*(hgraph/dataset.length)+(hgraph/dataset.length)*3.5/7+hmargin);
			})
			.attr("height", h/dataset.length - barPadding)
			.attr("class" , "textGr");


		var xAxis = d3.axisBottom()
						.scale(xScale)
						.ticks(5);

			svg.append("g")       
    			.attr("class", "x-axis")
     			.attr("transform",  // сдвиг оси вниз и вправо
        			 "translate(" + wText +"," + (h - barPadding) + ")")
    			.call(xAxis);
    		d3.selectAll("g.x-axis g.tick")
    			.append("line") // добавляем линию
    			.classed("grid-line", true) // добавляем класс
    			.attr("x1", 0)
   			 	.attr("y1", 0)
    			.attr("x2", 0)
    			.attr("y2", - (yAxisLength));
		svg.selectAll("rect")
			.data(dataset)
			.enter()
			.append("rect")
			.attr("x", wText)
			.attr("y", function(d,i) {
				return (i*(hgraph/dataset.length)+hmargin);
			})
			.attr("width", 10)
			// .attr("width", function (d){
			// 	return xScale(d);
			// })
			.attr("height", h/dataset.length - barPadding)
			.attr("class", function(d,i){
				return("r_"+i);
			});
		svg.selectAll("text .percentDiag")
			.data(dataset)
			.enter()
			.append("text")
			.text(function(d){
				return (d+"%");
			})
			.attr('class', 'percentDiag')
			.attr('id', function(d,i){
				return("pD_"+i);
			})
			.attr("x", function (d){
				return (xScale(d)+wText-60);
				})			
			.attr("y", function(d,i) {
				return (i*(hgraph/dataset.length)+(hgraph/dataset.length)*3/7+hmargin);
			});

			$('rect').filter(':even').css("fill", "#323f45");
			$('rect').filter(':odd').css("fill", "#abb7b7");
//изменение размеров графика при изменеии размер а экрана
$(window).resize(function(){
	var hResize = document.documentElement.clientHeight;
	for (i=0;i<f.length;i++)
	{
		f[i].style.height = hResize+"px";
	}
	$("#skill svg").remove();
	w = document.documentElement.clientWidth; //ширина график
	h = document.documentElement.clientHeight;
	if(w>h&&w>1000){
		 w*=0.55; //ширина график
		 h*=0.85; //высота график
	}
	else
	{
		w*=0.85; //ширина график
		h*=0.55; //высота график
	}
		var wGraph = w*0.68;//место под график
		var wText = w*0.3;//место под текст
		var wTxt = wText - 10;//отступ текста от грфика
		var dataset = [95, 85, 70, 50, 80 , 90, 40];
		var skillName = ["HTML5/CSS3", "JavaScript", "JQuery" , "PHP", "Illustrator", "Photoshop", "MySQL"]
		var barPadding = h*0.06;//отступы
		var hmargin=h*0.03;//отступы сверху и снизу
		var hgraph=h-hmargin*2;
		var svg = d3.selectAll("#skill")
					.append("svg")
					.attr("width", "56%")//размер окна
					.attr("height", "85%");
		var yAxisLength = h -  barPadding;
		var xScale = d3.scaleLinear()
						.domain([0, 100])
						.range([0, wGraph]);
		svg.selectAll("text") //написание текста
			.data(skillName)
			.enter()
			.append("text")
			.text (function(d){
				return d;
			})
			.attr("x", wTxt)
			.attr("y", function(d,i) {
				return (i*(hgraph/dataset.length)+(hgraph/dataset.length)*3.5/7+hmargin);
			})
			.attr("height", h/dataset.length - barPadding)
			.attr("class" , "textGr");


		var xAxis = d3.axisBottom()
						.scale(xScale)
						.ticks(5);

			svg.append("g")       
    			.attr("class", "x-axis")
     			.attr("transform",  // сдвиг оси вниз и вправо
        			 "translate(" + wText +"," + (h - barPadding) + ")")
    			.call(xAxis);
    		d3.selectAll("g.x-axis g.tick")
    			.append("line") // добавляем линию
    			.classed("grid-line", true) // добавляем класс
    			.attr("x1", 0)
   			 	.attr("y1", 0)
    			.attr("x2", 0)
    			.attr("y2", - (yAxisLength));
		svg.selectAll("rect")
			.data(dataset)
			.enter()
			.append("rect")
			.attr("x", wText)
			.attr("y", function(d,i) {
				return (i*(hgraph/dataset.length)+hmargin);
			})
			.attr("width", function (d){
				return xScale(d);
			})
			.attr("height", h/dataset.length - barPadding)
			.attr("class", function(d,i){
				return("r_"+i);
			});
		svg.selectAll("text .percentDiag")
			.data(dataset)
			.enter()
			.append("text")
			.text(function(d){
				return (d+"%");
			})
			.attr('class', 'percentDiag')
			.attr('id', function(d,i){
				return("pD_"+i);
			})
			.attr("x", function (d){
				return (xScale(d)+wText-60);
				})			
			.attr("y", function(d,i) {
				return (i*(hgraph/dataset.length)+(hgraph/dataset.length)*3/7+hmargin);
			});

			$('rect').filter(':even').css("fill", "#323f45");
			$('rect').filter(':odd').css("fill", "#abb7b7");

			$('rect').hover(function(){
					var indexRect=$(this).attr('class').charAt(2);
					var percentD = $('.percentDiag');
					for(i=0;i<percentD.length;i++) {
						if (indexRect == percentD[i].getAttribute('id').charAt(3)){
							percentD[i].setAttribute("class","percentDiag"+ " " + "actve");
						}
					}
				},function() {
					var indexRect=$(this).attr('class').charAt(2);
					var percentD = $('.percentDiag');
					for(i=0;i<percentD.length;i++) {
						if (indexRect == percentD[i].getAttribute('id').charAt(3)){
							percentD[i].setAttribute("class","percentDiag");
						}
					}
				}
				);
				$('.percentDiag').hover(function(){
					$(this).toggleClass("actve");
				},
				function(){
					$(this).toggleClass("actve");
				})
});

//animation rect
function rectAnim() {
	if(pIndex==4){
      	svg.selectAll("rect")
			.data(dataset)
			.attr("width", 10)
			.attr("height", h/dataset.length - barPadding)
			.transition()
    		.duration(5000)
   		 	.delay(200)
			.attr("width", function (d){
				return xScale(d);
			});
 	};
 };
//menu
function caseMenu(pIndex) {
	var ind=pIndex;
switch (ind) {
      	case 1: $("#up hr").addClass('actv');
				$(".spsk a:not(#up)").find("hr").removeClass('actv');
				break;
		case 2: $("#pageOne hr").addClass('actv');
				$(".spsk a:not(#pageOne)").find("hr").removeClass('actv');
				break;
		case 3: $("#pageTwo hr").addClass('actv');
				$(".spsk a:not(#pageTwo)").find("hr").removeClass('actv');
				break;
		case 4: $("#pageThree hr").addClass('actv');
				$(".spsk a:not(#pageThree)").find("hr").removeClass('actv');
				break;
		case 5: $("#pageFor hr").addClass('actv');
				$(".spsk a:not(#pageFor)").find("hr").removeClass('actv');
				break;
		case 6: $("#pageFive hr").addClass('actv');
				$(".spsk a:not(#pageFive)").find("hr").removeClass('actv');
				break;
		case 7: $("#down hr").addClass('actv');
				$(".spsk a:not(#down)").find("hr").removeClass('actv');
				break;
      }
};



$(document).ready(function(){
	$('rect').hover(function(){
		var indexRect=$(this).attr('class').charAt(2);
		var percentD = $('.percentDiag');
		for(i=0;i<percentD.length;i++) {
			if (indexRect == percentD[i].getAttribute('id').charAt(3)){
				percentD[i].setAttribute("class","percentDiag"+ " " + "actve");
			}
		}
	},function() {
		var indexRect=$(this).attr('class').charAt(2);
		var percentD = $('.percentDiag');
		for(i=0;i<percentD.length;i++) {
			if (indexRect == percentD[i].getAttribute('id').charAt(3)){
				percentD[i].setAttribute("class","percentDiag");
			}
		}
	}
	);
	$('.percentDiag').hover(function(){
		$(this).toggleClass("actve");
	},
	function(){
		$(this).toggleClass("actve");
	})
	
})

!function($){

  var defaults = {
    sectionContainer: "section",
    easing: "ease",
    animationTime: 1000,
    pagination: true,
    updateURL: false,
    keyboard: true,
    beforeMove: null,
    afterMove: null,
    loop: true,
    responsiveFallback: false,
    direction : 'vertical'
	};

// one page scroll

	$.fn.swipeEvents = function() {
      return this.each(function() {

        var startX,
            startY,
            $this = $(this);

        $this.bind('touchstart', touchstart);

        function touchstart(event) {
          var touches = event.originalEvent.touches;
          if (touches && touches.length) {
            startX = touches[0].pageX;
            startY = touches[0].pageY;
            $this.bind('touchmove', touchmove);
          }
        }

        function touchmove(event) {
          var touches = event.originalEvent.touches;
          if (touches && touches.length) {
            var deltaX = startX - touches[0].pageX;
            var deltaY = startY - touches[0].pageY;

            if (deltaX >= 50) {
              $this.trigger("swipeLeft");
            }
            if (deltaX <= -50) {
              $this.trigger("swipeRight");
            }
            if (deltaY >= 50) {
              $this.trigger("swipeUp");
            }
            if (deltaY <= -50) {
              $this.trigger("swipeDown");
            }
            if (Math.abs(deltaX) >= 50 || Math.abs(deltaY) >= 50) {
              $this.unbind('touchmove', touchmove);
            }
          }
        }

      });
    };


  $.fn.onepage_scroll = function(options){
    var settings = $.extend({}, defaults, options),
        el = $(this),
        sections = $(settings.sectionContainer)
        total = sections.length,
        status = "off",
        topPos = 0,
        leftPos = 0,
        lastAnimation = 0,
        quietPeriod = 500,
        paginationList = "";

    $.fn.transformPage = function(settings, pos, index) {
      if (typeof settings.beforeMove == 'function') settings.beforeMove(index);
      // Just a simple edit that makes use of modernizr to detect an IE8 browser and changes the transform method into
    	// an top animate so IE8 users can also use this script.
    	if($('html').hasClass('ie8')){
        if (settings.direction == 'horizontal') {
          var toppos = (el.width()/100)*pos;
          $(this).animate({left: toppos+'px'},settings.animationTime);
        } else {
          var toppos = (el.height()/100)*pos;
          $(this).animate({top: toppos+'px'},settings.animationTime);
        }
    	} else{
    	  $(this).css({
    	    "-webkit-transform": ( settings.direction == 'horizontal' ) ? "translate3d(" + pos + "%, 0, 0)" : "translate3d(0, " + pos + "%, 0)",
         "-webkit-transition": "all " + settings.animationTime + "ms " + settings.easing,
         "-moz-transform": ( settings.direction == 'horizontal' ) ? "translate3d(" + pos + "%, 0, 0)" : "translate3d(0, " + pos + "%, 0)",
         "-moz-transition": "all " + settings.animationTime + "ms " + settings.easing,
         "-ms-transform": ( settings.direction == 'horizontal' ) ? "translate3d(" + pos + "%, 0, 0)" : "translate3d(0, " + pos + "%, 0)",
         "-ms-transition": "all " + settings.animationTime + "ms " + settings.easing,
         "transform": ( settings.direction == 'horizontal' ) ? "translate3d(" + pos + "%, 0, 0)" : "translate3d(0, " + pos + "%, 0)",
         "transition": "all " + settings.animationTime + "ms " + settings.easing
    	  });
    	}
      $(this).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
        if (typeof settings.afterMove == 'function') settings.afterMove(index);
      });
    }

    $.fn.moveDown = function() {
      var el = $(this)
      index = $(settings.sectionContainer +".active").data("index");
      current = $(settings.sectionContainer + "[data-index='" + index + "']");
      next = $(settings.sectionContainer + "[data-index='" + (index + 1) + "']");
      if(next.length < 1) {
        if (settings.loop == true) {
          pos = 0;
          next = $(settings.sectionContainer + "[data-index='1']");
        } else {
          return
        }

      }else {
        pos = (index * 100) * -1;
      }
      if (typeof settings.beforeMove == 'function') settings.beforeMove( next.data("index"));
      current.removeClass("active")
      next.addClass("active");
      if(settings.pagination == true) {
        $(".onepage-pagination li a" + "[data-index='" + index + "']").removeClass("active");
        $(".onepage-pagination li a" + "[data-index='" + next.data("index") + "']").addClass("active");
      }

      $("body")[0].className = $("body")[0].className.replace(/\bviewing-page-\d.*?\b/g, '');
      $("body").addClass("viewing-page-"+next.data("index"))

      if (history.replaceState && settings.updateURL == true) {
        var href = window.location.href.substr(0,window.location.href.indexOf('#')) + "#" + (index + 1);
        history.pushState( {}, document.title, href );
      }
      el.transformPage(settings, pos, next.data("index"));
      pIndex=next.data("index");
      rectAnim();
      caseMenu(pIndex);       
    }

    $.fn.moveUp = function() {
      var el = $(this)
      index = $(settings.sectionContainer +".active").data("index");
      current = $(settings.sectionContainer + "[data-index='" + index + "']");
      next = $(settings.sectionContainer + "[data-index='" + (index - 1) + "']");

      if(next.length < 1) {
        if (settings.loop == true) {
          pos = ((total - 1) * 100) * -1;
          next = $(settings.sectionContainer + "[data-index='"+total+"']");
        }
        else {
          return
        }
      }else {
        pos = ((next.data("index") - 1) * 100) * -1;
      }
      if (typeof settings.beforeMove == 'function') settings.beforeMove(next.data("index"));
      current.removeClass("active")
      next.addClass("active")
      if(settings.pagination == true) {
        $(".onepage-pagination li a" + "[data-index='" + index + "']").removeClass("active");
        $(".onepage-pagination li a" + "[data-index='" + next.data("index") + "']").addClass("active");
      }
      $("body")[0].className = $("body")[0].className.replace(/\bviewing-page-\d.*?\b/g, '');
      $("body").addClass("viewing-page-"+next.data("index"))

      if (history.replaceState && settings.updateURL == true) {
        var href = window.location.href.substr(0,window.location.href.indexOf('#')) + "#" + (index - 1);
        history.pushState( {}, document.title, href );
      }
      el.transformPage(settings, pos, next.data("index"));
      pIndex=next.data("index");
      rectAnim();
      caseMenu(pIndex);
    }

    $.fn.moveTo = function(page_index) {
      current = $(settings.sectionContainer + ".active")
      next = $(settings.sectionContainer + "[data-index='" + (page_index) + "']")
      if(next.length > 0) {
        if (typeof settings.beforeMove == 'function') settings.beforeMove(next.data("index"));
        current.removeClass("active")
        next.addClass("active")
        $(".onepage-pagination li a" + ".active").removeClass("active");
        $(".onepage-pagination li a" + "[data-index='" + (page_index) + "']").addClass("active");
        $("body")[0].className = $("body")[0].className.replace(/\bviewing-page-\d.*?\b/g, '');
        $("body").addClass("viewing-page-"+next.data("index"))

        pos = ((page_index - 1) * 100) * -1;

        if (history.replaceState && settings.updateURL == true) {
            var href = window.location.href.substr(0,window.location.href.indexOf('#')) + "#" + (page_index - 1);
            history.pushState( {}, document.title, href );
        }
        el.transformPage(settings, pos, page_index);
        pIndex=page_index;
        rectAnim();
     	caseMenu(pIndex); 
      }
    }

    function responsive() {
      //start modification
      var valForTest = false;
      var typeOfRF = typeof settings.responsiveFallback

      if(typeOfRF == "number"){
      	valForTest = $(window).width() < settings.responsiveFallback;
      }
      if(typeOfRF == "boolean"){
      	valForTest = settings.responsiveFallback;
      }
      if(typeOfRF == "function"){
      	valFunction = settings.responsiveFallback();
      	valForTest = valFunction;
      	typeOFv = typeof valForTest;
      	if(typeOFv == "number"){
      		valForTest = $(window).width() < valFunction;
      	}
      }

      //end modification
      if (valForTest) {
        $("body").addClass("disabled-onepage-scroll");
        $(document).unbind('mousewheel DOMMouseScroll MozMousePixelScroll');
        el.swipeEvents().unbind("swipeDown swipeUp");
      } else {
        if($("body").hasClass("disabled-onepage-scroll")) {
          $("body").removeClass("disabled-onepage-scroll");
          $("html, body, .wrapper").animate({ scrollTop: 0 }, "fast");
        }


        el.swipeEvents().bind("swipeDown",  function(event){
          if (!$("body").hasClass("disabled-onepage-scroll")) event.preventDefault();
          el.moveUp();
        }).bind("swipeUp", function(event){
          if (!$("body").hasClass("disabled-onepage-scroll")) event.preventDefault();
          el.moveDown();
        });

        $(document).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(event) {
          event.preventDefault();
          var delta = event.originalEvent.wheelDelta || -event.originalEvent.detail;
          init_scroll(event, delta);
        });
      }
    }


    function init_scroll(event, delta) {
        deltaOfInterest = delta;
        var timeNow = new Date().getTime();
        // Cancel scroll if currently animating or within quiet period
        if(timeNow - lastAnimation < quietPeriod + settings.animationTime) {
            event.preventDefault();
            return;
        }

        if (deltaOfInterest < 0) {
          el.moveDown()
        } else {
          el.moveUp()
        }
        lastAnimation = timeNow;
    }

    // Prepare everything before binding wheel scroll

    el.addClass("onepage-wrapper").css("position","relative");
    $.each( sections, function(i) {
      $(this).css({
        position: "absolute",
        top: topPos + "%"
      }).addClass("section").attr("data-index", i+1);


      $(this).css({
        position: "absolute",
        left: ( settings.direction == 'horizontal' )
          ? leftPos + "%"
          : 0,
        top: ( settings.direction == 'vertical' || settings.direction != 'horizontal' )
          ? topPos + "%"
          : 0
      });

      if (settings.direction == 'horizontal')
        leftPos = leftPos + 100;
      else
        topPos = topPos + 100;


      if(settings.pagination == true) {
        paginationList += "<li><a data-index='"+(i+1)+"' href='#" + (i+1) + "'></a></li>"
      }
    });

    el.swipeEvents().bind("swipeDown",  function(event){
      if (!$("body").hasClass("disabled-onepage-scroll")) event.preventDefault();
      el.moveUp();
    }).bind("swipeUp", function(event){
      if (!$("body").hasClass("disabled-onepage-scroll")) event.preventDefault();
      el.moveDown();
    });

    // Create Pagination and Display Them
    if (settings.pagination == true) {
      if ($('ul.onepage-pagination').length < 1) $("<ul class='onepage-pagination'></ul>").prependTo("body");

      if( settings.direction == 'horizontal' ) {
        posLeft = (el.find(".onepage-pagination").width() / 2) * -1;
        el.find(".onepage-pagination").css("margin-left", posLeft);
      } else {
        posTop = (el.find(".onepage-pagination").height() / 2) * -1;
        el.find(".onepage-pagination").css("margin-top", posTop);
      }
      $('ul.onepage-pagination').html(paginationList);
    }

    if(window.location.hash != "" && window.location.hash != "#1") {
      init_index =  window.location.hash.replace("#", "")
      pIndex=init_index;
      rectAnim();
      if (parseInt(init_index) <= total && parseInt(init_index) > 0) {
        $(settings.sectionContainer + "[data-index='" + init_index + "']").addClass("active")
        $("body").addClass("viewing-page-"+ init_index)
        if(settings.pagination == true) $(".onepage-pagination li a" + "[data-index='" + init_index + "']").addClass("active");

        next = $(settings.sectionContainer + "[data-index='" + (init_index) + "']");
        if(next) {
          next.addClass("active")
          if(settings.pagination == true) $(".onepage-pagination li a" + "[data-index='" + (init_index) + "']").addClass("active");
          $("body")[0].className = $("body")[0].className.replace(/\bviewing-page-\d.*?\b/g, '');
          $("body").addClass("viewing-page-"+next.data("index"))
          if (history.replaceState && settings.updateURL == true) {
            var href = window.location.href.substr(0,window.location.href.indexOf('#')) + "#" + (init_index);
            history.pushState( {}, document.title, href );
          }
        }
        pos = ((init_index - 1) * 100) * -1;
        el.transformPage(settings, pos, init_index);
      } else {
        $(settings.sectionContainer + "[data-index='1']").addClass("active")
        $("body").addClass("viewing-page-1")
        if(settings.pagination == true) {$(".onepage-pagination li a" + "[data-index='1']").addClass("active");
    }
      }
    }else{
      $(settings.sectionContainer + "[data-index='1']").addClass("active")
      $("body").addClass("viewing-page-1")
      if(settings.pagination == true) $(".onepage-pagination li a" + "[data-index='1']").addClass("active");
    }

    if(settings.pagination == true)  {
      $(".onepage-pagination li a").click(function (){
        var page_index = $(this).data("index");
        el.moveTo(page_index);
      });
      $('.arrowMain').click(function() {
      	el.moveDown();
      });
      $('.doZakazCont').click(function() {
      	el.moveTo(7);
      });

      var elemNav=$(".spsk a");
		elemNav.bind("click", function (){
		switch($(this).attr("id")) {
			case 'up': el.moveTo(1);break;
			case 'pageOne': el.moveTo(2);break;
			case 'pageTwo': el.moveTo(3);break;
			case 'pageThree': el.moveTo(4);break;
			case 'pageFor': el.moveTo(5);break;
			case 'pageFive': el.moveTo(6);break;
			case 'down': el.moveTo(7);break;
		}
	  	});
    }

    $(document).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(event) {
      event.preventDefault();
      var delta = event.originalEvent.wheelDelta || -event.originalEvent.detail;
      if(!$("body").hasClass("disabled-onepage-scroll")) init_scroll(event, delta);
    });


    if(settings.responsiveFallback != false) {
      $(window).resize(function() {
        responsive();
      });

      responsive();
    }

    if(settings.keyboard == true) {
      $(document).keydown(function(e) {
        var tag = e.target.tagName.toLowerCase();

        if (!$("body").hasClass("disabled-onepage-scroll")) {
          switch(e.which) {
            case 38:
              if (tag != 'input' && tag != 'textarea') el.moveUp()
            break;
            case 40:
              if (tag != 'input' && tag != 'textarea') el.moveDown()
            break;
            case 32: //spacebar
              if (tag != 'input' && tag != 'textarea') el.moveDown()
            break;
            case 33: //pageg up
              if (tag != 'input' && tag != 'textarea') el.moveUp()
            break;
            case 34: //page dwn
              if (tag != 'input' && tag != 'textarea') el.moveDown()
            break;
            case 36: //home
              el.moveTo(1);
            break;
            case 35: //end
              el.moveTo(total);
            break;
            default: return;
          }
        }

      });
    }
    return false;
  }
}(window.jQuery);

