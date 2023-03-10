// $(function() {
//     $('.carousel__inner').slick({
//         speed: 1200,
//         // adaptiveHeight: true,
//         autoplay: true,
//         autoplaySpeed: 2000, 
//         prevArrow: '<button type="button" class="slick-prev"><img src="../images/icons/left.svg"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="../images/icons/right.svg"></button>',
//         responsive: [
//             {
//                 breakpoint: 992,
//                 settings: {
//                     dots: true,
//                     arrows: false
//                 }
//             }
//         ]
//     });
// });

const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
});
document.querySelector('.prev').onclick = function () {
    slider.goTo('prev');
};

document.querySelector('.next').onclick = function () {
    slider.goTo('next');
};

// $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
//     $(this)
//       .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
//       .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
//   });

// $('.catalog-item__link').each(function (i) {
//     $(this).on('click', function(e) {
//         e.preventDefault();
//         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
//         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
//     });
// });
  
// function toggleSlide(item) {
//     $(item).each(function (i) {
//     $(this).on('click', function(e) {
//         e.preventDefault();
//         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
//         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
//     });
// };
// toggleSlide('.catalog-item__link');
// toggleSlide('.catalog-item__back');

//modal
$('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');
});
$('.modal__close').on('click', function() {
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
});

$('.button_mini').each(function(i) {
    $(this).on('click', function() {
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text()); 
        $('.overlay, #order').fadeIn('slow');
    });
});

$('.feed-form').validate();
$('#consultation-form').validate({
    rules: {
        name: 'required',
        phone: 'required',
        email: {
            required: true,
            email: true

        }
    }
});
$('#consultation form').validate();
$('#order form').validate();    


$('input[name=phone]').mask('+380(99) 999-9999');

//Smooth scroll and page up
$(window).scrollTop(function() {
    if ($(this).scrollTop() > 1600 ) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
    
}); 

$("a[href^='#']").click(function() {
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
});