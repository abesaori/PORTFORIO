$(function () {
    //ハンバーガーメニュー
    $('.hamburger,.nav_manu li').click(function () {
        $('.nav_manu').fadeToggle();
        $('.hamburger').toggleClass('open');
    });

    // slider 
    $('.work_slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive:[
            {
                breakpoint:767,
                settings:{
                      autoplay: true,
                      dots: true, 
                      centerMode: true, 
                      centerPadding: '0px', 
                      slidesToShow: 3,
                      slidesToScroll: 1
                    },
                  },
        ]
    });
//  text ふわっと
        $(window).scroll(function () {
          $('.title_wrap').each(function () {
            const targetElement = $(this).offset().top;
            const scroll = $(window).scrollTop();
            const windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight) {
              $(this).addClass('view');
            }
          });
        });

        (function ($){
    $(document).ready(function ($){
        // フェードイン
        $(window).scroll(function () {
            $('.fadeIn,.fadeIn_time').each(function () {
                var scroll = $(window).scrollTop(); // 現在のスクロール位置
                var offset = $(this).offset().top; // 対象の上からの位置
                var windowHeight = $(window).height(); // ウィンドウの高さ
                if (scroll > offset - windowHeight + 150) {
                    $(this).addClass("scrollIn");
                }
            });
        });
    });
})(jQuery);


  function randomCharactor(c) {
    //跳ねさせる要素すべて取得
    var randomChar = document.getElementsByClassName(c);
    //for で総当たり
    for (var i = 0; i < randomChar.length; i++) {
        //クロージャー
        (function(i) {
            //i 番目の要素、テキスト内容、文字列の長さを取得
            var randomCharI = randomChar[i];
            var randomCharIText = randomCharI.textContent;
            var randomCharLength = randomCharIText.length;
            //何番目の文字を跳ねさせるかをランダムで決める
            var Num = ~~(Math.random() * randomCharLength);
            //跳ねさせる文字を span タグで囲む、それ以外の文字と合わせて再び文字列を作る
            var newRandomChar = randomCharIText.substring(0, Num) + "<span>" + randomCharIText.charAt(Num) + "</span>" + randomCharIText.substring(Num + 1, randomCharLength);
            randomCharI.innerHTML = newRandomChar;
            //アニメーションが終わったら再び関数を発火させる
            document.getElementsByClassName(c)[0].children[0].addEventListener("animationend", function() {
                randomCharactor(c)
            }, false)
        })(i)
    }
}
//クラス名がaboutのクラスを跳ねさせる
randomCharactor("about");                });    
