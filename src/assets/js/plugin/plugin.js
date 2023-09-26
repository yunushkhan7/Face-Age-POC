$(function ($) {
  "use strict";

  jQuery(document).ready(function () {

   /* niceSelect */
   $(".niceSelect").niceSelect();

    // counter Up
    if (document.querySelector('.counter') !== null) {
      $('.counter').counterUp({
        delay: 10,
        disableOn: 0,
        time: 2000
      });
    }

    // lottery-carousel
    $(".lottery-carousel").not('.slick-initialized').slick({
      infinite: true,
      autoplay: false,
      centerMode: true,
      centerPadding: "0px",
      focusOnSelect: false,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: "<button type='button' class='arafat-prev pull-left'><i class=\"icon-c-arrow-single\"  aria-hidden='true'></i></button>",
      nextArrow: "<button type='button' class='arafat-next pull-right'><i class=\"icon-c-arrow-single\"  aria-hidden='true'></i></button>",
      dots: false,
      dotsClass: 'section-dots',
      customPaging: function (slider, i) {
        var slideNumber = (i + 1),
          totalSlides = slider.slideCount;
        return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '/' + totalSlides + '</span></a>';
      },
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
    });

    // testimonial-carousel
    $(".testimonial-carousel").not('.slick-initialized').slick({
      infinite: true,
      autoplay: false,
      centerMode: true,
      centerPadding: "0px",
      focusOnSelect: false,
      speed: 1000,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: "<button type='button' class='arafat-prev pull-left'><i class=\"icon-c-arrow-single\"  aria-hidden='true'></i></button>",
      nextArrow: "<button type='button' class='arafat-next pull-right'><i class=\"icon-c-arrow-single\"  aria-hidden='true'></i></button>",
      dots: false,
      dotsClass: 'section-dots',
      customPaging: function (slider, i) {
        var slideNumber = (i + 1),
          totalSlides = slider.slideCount;
        return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '/' + totalSlides + '</span></a>';
      },
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
    });

    // latest-news-carousel
    $(".latest-news-carousel").not('.slick-initialized').slick({
      infinite: true,
      autoplay: false,
      centerMode: true,
      centerPadding: "0px",
      focusOnSelect: false,
      speed: 1000,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: "<button type='button' class='arafat-prev pull-left'><i class=\"icon-c-arrow-single\"  aria-hidden='true'></i></button>",
      nextArrow: "<button type='button' class='arafat-next pull-right'><i class=\"icon-c-arrow-single\"  aria-hidden='true'></i></button>",
      dots: false,
      dotsClass: 'section-dots',
      customPaging: function (slider, i) {
        var slideNumber = (i + 1),
          totalSlides = slider.slideCount;
        return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '/' + totalSlides + '</span></a>';
      },
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
    });

    // authority-carousel
    $(".authority-carousel").not('.slick-initialized').slick({
      infinite: true,
      autoplay: false,
      centerMode: true,
      centerPadding: "0px",
      focusOnSelect: false,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: "<button type='button' class='arafat-prev pull-left'><i class=\"icon-c-arrow-single\"  aria-hidden='true'></i></button>",
      nextArrow: "<button type='button' class='arafat-next pull-right'><i class=\"icon-c-arrow-single\"  aria-hidden='true'></i></button>",
      dots: false,
      dotsClass: 'section-dots',
      customPaging: function (slider, i) {
        var slideNumber = (i + 1),
          totalSlides = slider.slideCount;
        return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '/' + totalSlides + '</span></a>';
      },
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
    });

    /* Countdown js */
    if (document.querySelector('.countdown') !== null) {
      $('.countdown').downCount({
        date: '12/31/2024 11:59:59',
        offset: +10
      });
    }

    /* Wow js */
    new WOW().init();

  });
});