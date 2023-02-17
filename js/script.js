$(document).ready(function(){
    // $('.header-inner-left').click(function(e){
    //     e.preventDefault();
    //     $(this).find('.content').toggle('show');
    // });

    // $('.header-inner-right').click(function(e){
    //     e.preventDefault();
    //     $(this).find('.content').toggle('show');
    //     $(this).find('web-info-right').siblings().toggle('hide');
    // });

    $('.header-btn2').click(function(e){
        e.preventDefault();
        $('#loginModal').modal('show');
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        })
    })

    $('.nav-icon').click(function(e){
        e.preventDefault();
        $('.navbar').addClass('active');
        $('.cover').addClass('active');
    })

    $('.cover').click(function(e){
        e.preventDefault();
        $('.navbar').removeClass('active');
        $('.cover').removeClass('active');
    })

    $('.news-slick').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: false,
        dots: true,
        loop: true,
    })
});