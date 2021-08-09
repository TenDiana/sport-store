$(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop:true,
        items:1,
        dots:false,
        autoHeight:true,
    });
// Go to the next item
    $('.owl-next').click(function() {
        owl.trigger('next.owl.carousel');
    })
    $('.owl-prev').click(function() {
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })



    $('ul.catalog__caption').on('click', 'li:not(catalog__tab_active)', function() {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.catalog__tabs').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    $('.catalog__model-link').each(function (i) {
        $(this).on('click', function (e) {
            e.preventDefault();
            $('.catalog__model').eq(i).addClass('catalog__model_active');
            $('.catalog__back-info').eq(i).addClass('catalog__back-info_active');
    })

    });


    $('.catalog__back-info-link').each(function (i) {
        $(this).on('click', function (e) {
            e.preventDefault();
            $('.catalog__model').eq(i).removeClass('catalog__model_active');
            $('.catalog__back-info').eq(i).removeClass('catalog__back-info_active');

    })


    });


});


var map;

DG.then(function () {
    map = DG.map('map', {
        center: [42.878982, 74.595075],
        zoom: 17
    });
    var myIcon = DG.icon({
        iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Google_Maps_icon_%282020%29.svg/714px-Google_Maps_icon_%282020%29.svg.png',
        iconSize: [35, 50],
    });
    DG.marker([42.878982, 74.595075], {icon: myIcon}).addTo(map).bindPopup('IT RUN ACADEMY');
});