/*ランダム英数字表記*/
var random_text = {
  loop: false,
  minDisplayTime: 100,
  initialDelay: 50, 
  autoStart: true,
  in: {
    effect: 'fadeInUp',
    delayScale: 1,
    delay: 10,
    sync: false,
    shuffle: true,
  },
  out: {
  }
}
var element

function RandomInit() {
  element= $(".Random_Alphabet");
  $(element[0]).textillate(random_text);
}

function RandomAnimeControl() {
    var elemPos = $(element[1]).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();

    if (scroll >= elemPos - windowHeight) {
      $(element[1]).textillate(random_text);
    }
}


$(window).scroll(function () {
  RandomAnimeControl();
});


$(window).on('load', function () {
  RandomInit(); 
  RandomAnimeControl();
});
/*ランダム表記*/
var random = []
function TypingInit() {
  $('.js_randomtyping').each(function (i) { 
    random[i] = new ShuffleText(this);
  });
}

function TypingAnime() {
  $(".js_randomtyping").each(function (i) {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      if(!$(this).hasClass("endAnime")){
        random[i].start();
        random[i].duration = 800;
        $(this).addClass("endAnime");
      }
    }else{
      $(this).removeClass("endAnime"); 
    }
  });
}


$(window).scroll(function () {
  TypingAnime();
});


$(window).on('load', function () {
  TypingInit(); 
  TypingAnime();
});