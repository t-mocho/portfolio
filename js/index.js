// 画面
$(document).ready(function($) {
  //1024px以上の場合
  if (window.matchMedia('(min-width: 1024px)').matches) {
    // メニュー
    $(function() {
      $("#menu").on("click", function() {
        $(this).next().animate({
          width: 'toggle'
        }, 'slow');
      });
    });
    /*アクティブ*/
    $(function() {
      $('#menu').click(function() {
        $("#menu_icon").toggleClass('active');
      });
    });
  } else {
    // メニュー
    $(function() {
      $("#menu").on("click", function() {
        $(this).next().animate({
          height: 'toggle'
        }, 'slow');
      });
    });
    // メニュー押下でメニュー削除
    $(function() {
      $("#menu_navi a").on("click", function() {
        $("#menu_navi").animate({
          height: 'toggle'
        }, 'slow');
      });
    });
    /*アクティブ*/
    $(function() {
      $('#menu,#menu_navi a').click(function() {
        $("#menu_icon").toggleClass('active');
      });
    });
  };
});

/*スムーススクロール*/
$(function() {
  $('a[href^="#"]').click(function() {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });
});


// スクロールでTITLE下線アニメーション
$(function() {
  $(window).scroll(function() {
    $(".title").each(function() {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 500) {
        $(this).addClass('active');
      }
    });
  });
});

/* スクロールでスライドイン*/
$(function() {
  $(window).scroll(function() {
    $('.fadein').each(function() {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 200) {
        $(this).css('opacity', '1');
        $(this).css('transform', 'translateY(0)');
      }
    });
  });
});

// 実行
$(function() {
  var len = delayDisplay('#main-text'); // 1回目
  delayDisplay('#sub-text', len); // 2回目
});

// 処理
function delayDisplay(clazz, index = 0) {
  var $msg = $(clazz); // TEXT引数
  var $text = $(clazz).html().split(""); // 1文字ずつ格納
  $(clazz).html(""); // 最初は非表示
  $.each($text, function(idx, elem) { // 終わるまで回す
    var newEL = $("<span/>").text(elem).css({ // spanで1文字ずつ囲む
      opacity: 0
    });
    newEL.appendTo($msg);
    newEL.delay((idx + index) * 50); // 渡された続き分ずらす
    newEL.animate({
      opacity: 1
    }, 1000);
  });
  return $text.length; // 処理する対象の文字数返す
}
