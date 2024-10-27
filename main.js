// common
$(function () {

  //Vue
  // const App = {
  //   data() { 
  //     return { text };
  //   },
  // };
  // Vue.createApp(App).mount("#app");

  // aside
  $('aside .btn').click(function () {
    $('aside').toggleClass('hide');
  });

  // nav
  // $('nav').load('https://ids.iwplay.com.tw/common/mhxzx/nav.html', function() {

    //nav link
    // $('.home').attr('href', 'https://www.mhxzx.com.tw');
    // $('.point_teaching').attr('href', 'javascript:alert("敬請期待，預計3/17正式開放！");');
    // $('.faq').attr('href', 'https://www.mhxzx.com.tw/news/view/20220309/9725112c.html');

    // snslink
    // $('.facebook').attr('href', 'https://www.facebook.com/jadedynasty.games');
    // $('.instagram').attr('href', 'https://www.instagram.com/iwplay_game');
    // $('.youtube').attr('href', 'https://www.youtube.com/channel/UCQsFJ5GzJNPZAow549grd7g');
    // $('.gamer').attr('href', 'https://forum.gamer.com.tw/A.php?bsn=72976');

    // open_menu
    $('.open_menu').click(function () {
      $(this).toggleClass('close');
      $('.menu').toggleClass('open');
      $('.langs').toggleClass('show');
    });
    $('.menu ul li a').click(function (){
      $('.open_menu').removeClass('close');
      $('.menu').removeClass('open');
      $('.langs').removeClass('show');
    });

  // });

  // select language
  $('.langs_active').click(function(e) {
    e.stopPropagation();
    $('.langs').toggleClass('open');
  });
  $("html").click(function(e) {
    if ($(e.target).closest('.langs').length == 0)
    $(".langs").removeClass('open');
  });

  // lock scroll position, but retain settings for later
  function scroll_lock() {
    let scrollPosition = [
      self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
      self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
    ];
    $('html').data('scroll-position', scrollPosition);
    $('html').data('previous-overflow', $('html').css('overflow'));
    $('html').css('overflow', 'hidden');
    window.scrollTo(scrollPosition[0], scrollPosition[1]);
  }
  // un-lock scroll position
  function scroll_unlock() {
    let scrollPosition = $('html').data('scroll-position');
    $('html').css('overflow', $('html').data('previous-overflow'));
    window.scrollTo(scrollPosition[0], scrollPosition[1]);
  }

  // rewards
  $('.rewards_popup').hide();
  $('.rewards_icon').click(function(){
    $('.rewards_popup').fadeIn();
    $('.rewards_txt').hide();
    scroll_lock();
  });
  $('.rewards_icon.r1').click(function(){
    $('.rewards_txt.t1').fadeIn();
  });
  $('.rewards_icon.r2').click(function(){
    $('.rewards_txt.t2').fadeIn();
  });
  $('.rewards_icon.r3').click(function(){
    $('.rewards_txt.t3').fadeIn();
  });
  $('.rewards_icon.r4').click(function(){
    $('.rewards_txt.t4').fadeIn();
  });
  $('.rewards_icon.r5').click(function(){
    $('.rewards_txt.t5').fadeIn();
  });
  $('.rewards_icon.r6').click(function(){
    $('.rewards_txt.t6').fadeIn();
  });
  $('.rewards_icon.r7').click(function(){
    $('.rewards_txt.t7').fadeIn();
  });
  $('.popup, .popup_close').click(function(){
    $('.rewards_popup').fadeOut();
    scroll_unlock();
  });

  // news
  // $('.banner').load('https://www.mhxzx.com.tw/CmsBanner/ubanner_A.html');
  // $('#news_list').load('https://www.mhxzx.com.tw/news/indexS.html');

  //轮播图
  var bannerStr = '';
  $.each(sea_data_data.en, function(index){
    bannerStr += '<div class="swiper-slide"><a href="'+ this.link +'"><img src="'+ this.bigpic +'" /></a></div>';
  });
  $('.bannerSwiper .swiper-wrapper').html(bannerStr);
  var mySwiper = new Swiper('.bannerSwiper', {
    navigation: {
      nextEl: '.bannerSwiper .swiper-button-next',
      prevEl: '.bannerSwiper .swiper-button-prev',
    },
    pagination: {
      el: '.bannerSwiper .swiper-pagination',
      clickable :true,
    },
    observer:true,
    observeParents:true,
  })

  // menpai
  var showTab = 0;
  $('.chara').each(function() {
    var $tab = $(this);
    var $defaultLi = $('.chara_icon li', $tab).eq(showTab).addClass('active');
    $($defaultLi.find('a').attr('href')).siblings().hide();
    $('.chara_icon li', $tab).click(function() {
    
      var $this = $(this)
      $this.addClass('active').siblings().removeClass('active');
      const classId = $this.attr("id")
      $(".chara_content").removeClass('on')
      $(`#chara${classId}`).addClass('on')
      return false;
    }).find('a').focus(function() {
      this.blur();
    });
  });

  $("#nhantoc").click(function () {
    $(".icon_nhantoc").css("display", "")
    $(".icon_thandue").css("display", "none")
    $(".icon_thienmach").css("display", "none")
    $(".icon_class").removeClass('active')
    $(".icon_nhantoc").first().addClass("active")
    $(".chara_content").removeClass('on')
    $(".chara_content_nhantoc").first().addClass('on')
  })
  $("#thandue").click(function () {
    $(".icon_nhantoc").css("display", "none")
    $(".icon_thandue").css("display", "")
    $(".icon_thienmach").css("display", "none")
    $(".icon_class").removeClass('active')
    $(".icon_thandue").first().addClass("active")
    $(".chara_content").removeClass('on')
    $(".chara_content_thandue").first().addClass('on')
  })
  $("#thienmach").click(function () {
    $(".icon_nhantoc").css("display", "none")
    $(".icon_thandue").css("display", "none")
    $(".icon_thienmach").css("display", "")
    $(".icon_class").removeClass('active')
    $(".icon_thienmach").first().addClass("active")
    $(".chara_content").removeClass('on')
    $(".chara_content_thienmach").first().addClass('on')
  })

  // features
  $('#video').hide(); 
  $('.screen').click(function(){
    $('#app_store').fadeIn(); 
    $('#video').fadeOut(); 
  });
  $('.game_video').click(function(){
    $('#app_store').fadeOut(); 
    $('#video').fadeIn(); 
  });


});