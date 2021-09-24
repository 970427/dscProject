//轮播图
/*自动轮播*/

//间隙显示效果
function autoplay() {
    var index = 0;



    var timeId = setInterval(function() {
        $('.banner-bg  li').eq(index).stop().animate({
            opacity: 1
        }, 300).siblings().stop().animate({
            opacity: 0
        }, 300);
        $('.cloth-btn li').eq(index).addClass('on').siblings().removeClass('on');
        if (index == 5) {
            index = 0;
        }
        index++;
        console.log(index);
    }, 3000);
    $('.cloth-btn li').hover(function() {
        clearInterval(timeId);
        index = $(this).index();
        $('.banner-bg  li').eq(index).stop().animate({
            opacity: 1
        }, 300).siblings().stop().animate({
            opacity: 0
        }, 300);
        $('.cloth-btn li').eq(index).addClass('on').siblings().removeClass('on');
    }, function() {
        console.log($(this).index());
        autoplay();
    })
}

autoplay();

//二级导航栏
$('.categorys-item').hover(function() {
    $(this).find('.item-layer').fadeToggle(1, 'linear');
});
//table栏
console.log($('.tab-tit li'));
var that;
$('.tab-tit li').on('mouseover', function() {
    that = $(this).index();
    //console.log(that);
    $(this).addClass('on').siblings().removeClass('on');
    //console.log($(this).parents('.floor')[0]);
    //console.log($(this).parents('.floor').find('.foods-list').eq(that));

    $(this).parents('.floor').find('.foods-list').eq(that).fadeIn(600, 'linear').siblings().fadeOut(600, 'linear');
})

/*随手购 */

$('.hd-bar ul li').eq(0).mouseover(function() {
    $(this).addClass('on').siblings().removeClass('on');
    $('.atw-wrap ul').animate({
        left: 0
    }, 300, 'linear', function() {
        console.log(1);
    });
});
$('.hd-bar ul li').eq(1).mouseover(function() {
    $(this).addClass('on').siblings().removeClass('on');
    $('.atw-wrap ul').animate({
        left: -1200
    }, 300, 'linear');
});
$('.hd-bar ul li').eq(2).mouseover(function() {
    $(this).addClass('on').siblings().removeClass('on');
    $('.atw-wrap ul').animate({
        left: -2400
    }, 300, 'linear');
});
/*侧边按钮*/
var index = 0;
$('.atw-cont .next').click(function() {
    if (index++ == 2) {
        index = 2;
    }
    $('.atw-cont ul').animate({
        left: (-index) * 1200
    }, 300)
    $('.hd-bar ul li').eq(index).addClass('on').siblings().removeClass('on');
});
$('.atw-cont .prev').click(function() {
        if (index-- == 0) {
            index = 0;
        }
        $('.atw-cont ul').animate({
            left: (-index) * 1200
        }, 300)
        $('.hd-bar ul li').eq(index).addClass('on').siblings().removeClass('on');
    })
    /*楼层导航*/



$(window).scroll(function() {
    /*显示侧边栏*/
    var secDisTop = $('.main').offset().top;
    if ($(window).scrollTop() >= secDisTop) {
        $('.catetop-lift').removeClass('lift-hide');
    } else {
        $('.catetop-lift').addClass('lift-hide');
    }
    /*侧边栏变化 */
    var top = $(window).scrollTop();

    $('.main>div').each(function(index) {
            if (top > $(this).offset().top - 100) {
                $('.catetop-lift-item').eq(index).addClass('active').siblings().removeClass('active');
            }
        })
        /*点击*/
    $('.catetop-lift-item').click(function(index) {

        var back = $('.main>div').eq($(this).index()).offset().top - 100;
        $('body,html').stop().animate({
            'scrollTop': back
        }, 600)
    })
    $('.backtop').click(function() {
        $('html').stop().animate({ 'scrollTop': 0 }, 1000)
    })

});