$(function(){
    $(window).scroll(function(){
        let sct = $(window).scrollTop();

        for(let i = 0; i < 5; i++){
            $('section >article').eq(i).css({'transform' : 'translateZ(' + ((-5000 * i) + sct) + 'px)'});

            if(sct >= 5000*i && sct < 5000*(i+1)){
                $('section >article').removeClass('on');
                $('section >article').eq(i).addClass('on');
                $('.scrollNav li').removeClass('on');
                $('.scrollNav li').eq(i).addClass('on');
            }
        }
    });

    $('.scrollNav li').click(function(){
        let i = $(this).index();
        $('html, body').stop().animate({scrollTop : 5000*i},1500, 'swing');
    });

    $('body').on('mousemove', function(e){
        let posX = e.pageX/100;
        let posY = e.pageY/150;

        $('.obj11').css({'left' : -270 - posX, 'bottom' : -100 -posY})
        $('.obj12').css({'right' : -590 - posX, 'top' : -85 -posY})
        $('.obj13').css({'left' : -100 - posX, 'bottom' : -50 -posY})

        $('.obj21').css({'right' : -700 - posX, 'bottom' : -420 -posY})
        $('.obj22').css({'right' : -100 - posX, 'bottim' : -100 -posY})
    });
});