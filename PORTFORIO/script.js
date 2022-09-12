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
// wave 波の実装
$('#wave').wavify({
    height: 60,
    bones: 3,
    amplitude: 40,
    color: '#0bd',
    speed: .25
  });
  //   フォーム
jQuery("#my-form").submit(function (event) {
	event.preventDefault();

	let baseUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLScgWO07XAc3i8Azbg4LG7S5sJ2WJ9qVQd6ThZxsSk4J7t-vrg/formResponse";
	let name = jQuery("[name=\"entry.119829565\"]").val();
	let ruby = jQuery("[name=\"entry.762036364\"]").val();
	let mail = jQuery("[name=\"entry.1549721748\"]").val();
	let contents = jQuery("[name=\"entry.237673716\"]:checked").val();
	/* チェックボックスは数分だけ作る */
	let checks = ["", "", "", ""];
	let count = 0;
	jQuery("[name=\"entry.xxxxxxxxx\"]:checked").each(function() {
		checks[count] = jQuery(this).val();
		count++;
	});
	let select = jQuery("[name=\"entry.xxxxxxxxx\"]").val();

	jQuery.ajax({
			url: baseUrl,
			data: {
				"entry.119829565": name,
				"entry.762036364": ruby,
				"entry.1549721748": mail,
				"entry.237673716": contents,
			},
			type: "POST",
			dataType: "xml",
	}).always((jqXHR, textStatus, errorThrown) => {
		window.location.href = "thsnks.html";
	});
	return false;
});