$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true,
        minSlides: 1, // 2 to 1
        maxSlides: 1, // 2 to 1
        slideWidth: 500, // 300 to 500
        slideMargin: 20,
        // changes
        randomStart : true,
        moveSlides: 1,
        captions: true, 
        speed: 3000,
        pager: true,
        pagerType: 'short',
        pagetSelector: 'id_pager'
    });
});