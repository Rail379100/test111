$(document).ready(function(){

  $('.reviews_slider').slick({
    infinity: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: document.querySelector('#rev_botton_r'),
    prevArrow: document.querySelector('#rev_botton_l'),

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.our_clients').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: document.querySelector('#our_clients_botton_r'),
    prevArrow: document.querySelector('#our_clients_botton_l'),
    responsive: [
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1,
          slidesToShow: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.our_clients_mobile').slick({
    rows:2,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: document.querySelector('#our_clients_botton_mobile_r'),
    prevArrow: document.querySelector('#our_clients_botton_mobile_l'),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToShow: 2
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


 

 // let  = $(document).outerHeight(true);
 let = doc_height = $(document).height();
  $('.body_filters').css("height", doc_height)
  
  $('.header_services_button').click(function(event) {
   
    $('.header_services').toggleClass('active');
  });
  $('.header_services_button_mobile').click(function(event) {
   
    $('.header_services_mobile').toggleClass('active');
  });
  $('.header_menu_button_mobile').click(function(event) {
   
    $('.header_menu_mobile').toggleClass('active');
  });
  $('.header_menu_mobile_exit_button').click(function(event) {
   
    $('.header_menu_mobile').toggleClass('active');
  });

  if($(window).width() <= 1440){
    $('.check_pass_right_h2').text("Подключить контроль пропуска");
    $('#zagr_sper').text('Фото машины спереди');
    $('#zagr_szad').text('Фото машины сзади');
  }




  
  

  if($(window).width() <= 768){
    $('#inp_mod_1').attr("placeholder", "Фамилия");
    $('#inp_mod_2').attr("placeholder", "Отчество");
    $('#map_oform').text("Зарегистрироваться в РНИС");


  }
  if($(window).width() <= 479){
    $('.who_needs_passes_text_mod').text("Пропуск МКАД — необходим на автомобили разрешённой максимальной массой более (12 тонн) с 14 июня 2021 года изменено на 3,5 тонны, соответствующих по экологическим характеристикам требованиям ниже экологического класса 2");
    $('#map_oform').text("Регистрация в РНИС");
    $('#rnis_h2-mods').text("Регистрация в РНИС");
  }

  $('.faq_cres').click(function(event) {
    $(this).parent().parent().parent().toggleClass('active');
  });



  $('.sel').click(function(event) {
    $('.sel').not(this).attr('data-state','')
  });

  $(document).mouseup( function(e){ // событие клика по веб-документу
		var div = $( ".sel" ); // тут указываем ID элемента
		if ( !div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
			div.attr('data-state','')// скрываем его
		}
	});

  $('.photo_upload_input').on('change', function (e) {
    $('.photo_upload_name_value').text(e.target.files[0].name);

  });
  $(".photo_upload_del").on("click", function () {
  
    var sder = $('photo_upload_input').val("");
    $('.photo_upload_name_value').text('Фото не загружено');
});

  //$('.asd').click(function(event) {
    //$(".photo_upload_name_value")[0].value = "";
  //});

 



  $('#bats_1').click(function(event) {
    $('.issue_a_card').toggleClass('active_1');
    $('.issue_a_card').css('height', '700px');
    
  });
  $('#bats_2').click(function(event) {
    $('.issue_a_card').toggleClass('active_2');
    $('.issue_a_card').css('height', '580px');
  });
  $('#bats_3').click(function(event) {
    $('.issue_a_card').toggleClass('active_3');
  });
  $('#bats_4').click(function(event) {
    $('.issue_a_card').toggleClass('active_4');
  });

  //$('.about_us_player_button').click(function(event) {
    //$('.about_us_player').toggleClass('active');
  //});
 
 
  
    (function initPlayVideo() {
      var $videoPlayerIframe = $(".iframe_video");
   
      $('.about_us_player_button').on("click", function () {

        $('.about_us_player').toggleClass('active');
        $videoPlayerIframe[0].src += "&autoplay=1";
      });
    })();



    let header = $('.header_v');
  
 $(window).scroll(function() {
   if($(this).scrollTop() > 1) {
    header.addClass('header_fixed');
   } else {
    header.removeClass('header_fixed');
   }
 });


 $('.comprehensive_services_dont_quit').click(function(event) {
  $(this).toggleClass('active');
});
$('.about_us_button').click(function(event) {
  $(this).toggleClass('active');
});

$('.cantacts_info_block_button').click(function(event) {
  $(this).toggleClass('active');
});


$('#prop_mkad').click(function(event) {
  $('.psf_1').toggleClass('active');
});

$(document).mouseup( function(e){ // событие клика по веб-документу
  var div = $( ".psf_1" ); // тут указываем ID элемента
  if ( !div.is(e.target) // если клик был не по нашему блоку
      && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
      $('.psf_1').removeClass('active');
      $('body').removeClass('lock');
  }
});

$('#prop_ttk').click(function(event) {
  $('.psf_2').toggleClass('active');
});

$(document).mouseup( function(e){ // событие клика по веб-документу
  var div = $( ".psf_2" ); // тут указываем ID элемента
  if ( !div.is(e.target) // если клик был не по нашему блоку
      && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
      $('.psf_2').removeClass('active');
      $('body').removeClass('lock');
  }
});

$('#prop_sk').click(function(event) {
  $('.psf_3').toggleClass('active');
});

$(document).mouseup( function(e){ // событие клика по веб-документу
  var div = $( ".psf_3" ); // тут указываем ID элемента
  if ( !div.is(e.target) // если клик был не по нашему блоку
      && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
      $('.psf_3').removeClass('active');
      $('body').removeClass('lock');
  }
});




$('#zakaz_1').click(function(event) {
  $('.rsf_1').toggleClass('active');
});

$(document).mouseup( function(e){ // событие клика по веб-документу
  var div = $( ".rsf_1" ); // тут указываем ID элемента
  if ( !div.is(e.target) // если клик был не по нашему блоку
      && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
      $('.rsf_1').removeClass('active');
      $('body').removeClass('lock');
  }
});

$('#zakaz_2').click(function(event) {
  $('.rsf_2').toggleClass('active');
});

$(document).mouseup( function(e){ // событие клика по веб-документу
  var div = $( ".rsf_2" ); // тут указываем ID элемента
  if ( !div.is(e.target) // если клик был не по нашему блоку
      && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
      $('.rsf_2').removeClass('active');
      $('body').removeClass('lock');
  }
});

$('#zakaz_3').click(function(event) {
  $('.rsf_3').toggleClass('active');
});

$(document).mouseup( function(e){ // событие клика по веб-документу
  var div = $( ".rsf_3" ); // тут указываем ID элемента
  if ( !div.is(e.target) // если клик был не по нашему блоку
      && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
      $('.rsf_3').removeClass('active');
      $('body').removeClass('lock');
  }
});



if($(window).width() <= 1024){
   
  $('#prop_mkad').click(function(event) {
    $('body').toggleClass('lock');
  });

  $('#prop_ttk').click(function(event) {
    $('body').toggleClass('lock');
  });

  $('#prop_sk').click(function(event) {
    $('body').toggleClass('lock');
  });

  $('#zakaz_1').click(function(event) {
    $('body').toggleClass('lock');
  });

  $('#zakaz_2').click(function(event) {
    $('body').toggleClass('lock');
  });

  $('#zakaz_3').click(function(event) {
    $('body').toggleClass('lock');
  });
  
}


$('#chit_next').click(function(event) {
  $('.about_us_text').toggleClass('active');
});

$('#chit_scr').click(function(event) {
  $('.about_us_text').toggleClass('active');
});

});



