$(function ($) {
  "use strict";

  jQuery(document).ready(function () {

    // preloader
    $(".preloader").delay(300).animate({
      "opacity": "0"
    }, 500, function () {
      $(".preloader").css("display", "none");
    });

    // Scroll Top
    var ScrollTop = $(".scrollToTop");
    $(window).on('scroll', function () {
      if ($(this).scrollTop() < 500) {
        ScrollTop.removeClass("active");
      } else {
        ScrollTop.addClass("active");
      }
    });
    $('.scrollToTop').on('click', function () {
      $('html, body').animate({
        scrollTop: 0
      }, 500);
      return false;
    });

    // Navbar Dropdown
    var dropdown_menu = $(".header-section .dropdown-menu");
    $(window).resize(function () {
      if ($(window).width() < 992) {
        dropdown_menu.removeClass('show');
      }
      else {
        dropdown_menu.addClass('show');
      }
    });
    if ($(window).width() < 992) {
      dropdown_menu.removeClass('show');
    }
    else {
      dropdown_menu.addClass('show');
    }

    // Nav Items To Select
    $(".tab-to-select").change(function(){
      let optionVal = $(this).children("option:selected").val();
      switch (optionVal) {
        case "1":
          $("#jactpot-tab").click();
          break;
        case "2":
          $("#millions-tab").click();
          break;
        case "3":
          $("#euro-tab").click();
          break;
        case "4":
          $("#lottery-tab").click();
          break;
        case "5":
          $("#lotto-tab").click();
          break;
      }
    });

    // Autocomplete off
    $('input[type=text]').attr('autocomplete','off');

    // Form Validation
    $('form').submit(function(e) {
      e.preventDefault();
      var fname = $('#fname').val();
      var lname = $('#lname').val();
      var message = $('#message').val();
      var address = $('#address').val();
      var number = $('#number').val();
      $(".error").remove();
      if (fname.length < 1) {
        $('#fname').after('<p class="error mdtxt">This field is required</p>');
      }
      if (lname.length < 1) {
        $('#lname').after('<p class="error mdtxt">This field is required</p>');
      }
      if (number.length < 1) {
        $('#number').after('<p class="error mdtxt">This field is required</p>');
      }
      if (message.length < 1) {
        $('#message').after('<p class="error mdtxt">This field is required</p>');
      }
      if (address.length < 1) {
        $('#address').after('<p class="error mdtxt">This field is required</p>');
      } else {
        var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
        var validEmail = regEx.test(address);
      }
      if (document.querySelector('.error') == null) {
        $('.errorget').html('Your Message is send!');
        setTimeout(function() {
          $(".errorget").hide(500);
        }, 1500);
      }
    });

    // Sticky Header
    var fixed_top = $(".header-section");
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 50) {
        fixed_top.addClass("animated fadeInDown header-fixed");
      }
      else {
        fixed_top.removeClass("animated fadeInDown header-fixed");
      }
    });

    // color switch btn
    const cmnThm = document.getElementsByClassName("switch-wrapper");
    if (cmnThm) {
      var switchWrapper = $(".checkbox");
      $(switchWrapper).on("click", function () {
        $('html, section, footer').toggleClass('dark-ui');
        setTheme(localStorage.getItem("theme"));
      });
      if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark");
        switchWrapper.attr('checked', false);
      } else {
        localStorage.setItem("theme", "light");
        switchWrapper.attr('checked', true);
      }
      setTheme(localStorage.getItem("theme"));
      function setTheme(theme) {
        if (theme == "light") {
          $('.switch-wrapper i').removeClass('active');
          $('.switch-wrapper .moon').addClass('active');
          localStorage.setItem("theme", "dark");
          $("html, section").addClass('dark-ui');
          // $(".navbar-brand").find("img").attr("src", "assets/images/logo.png");
        } else {
          localStorage.setItem("theme", "light");
          $("html, section").removeClass("dark-ui");
          // $(".navbar-brand").find("img").attr("src", "assets/images/logo.png");
          $('.switch-wrapper i').removeClass('active');
          $('.switch-wrapper .sun').addClass('active');
        }
      }
    }

    // Buy Ticket
    var numbers = $(".pick-number li");
    $(numbers).click(function () {
      $(this).toggleClass('numActive');
      if($( numbers ).hasClass( "numActive" )){
        var numbersVal = $(this).text();
      }
      var numItems = $(".pick-number .numActive").length;
      if(numItems === 5){
        $(numbers).addClass('deactive');
      }
      $('.remove').click(function () {
        $(numbers, '.output-box li span').removeClass('deactive');
        $(numbers, '.output-box li span').removeClass('numActive');
        $('.output-box .numActive span').html('0');
      });
      if(numItems === 1){
        $(".output-box li span:eq(1)").html(numbersVal);
      }else if(numItems === 2){
        $(".output-box li span:eq(2)").html(numbersVal);
      }else if(numItems === 3){
        $(".output-box li span:eq(3)").html(numbersVal);
      }
      else if(numItems === 4){
        $(".output-box li span:eq(4)").html(numbersVal);
      }
      else if(numItems === 5){
        $(".output-box li span:eq(5)").html(numbersVal);
      }
    });
    var powerBall = $(".pick-power-ball li");
    $(powerBall).click(function () {
      $(powerBall).removeClass('ballActive');
      $(this).toggleClass('ballActive');
      var numbersVal = $(this).text();
      var powerBallItems = $(".pick-power-ball .ballActive").length;
      if(powerBallItems === 1){
        $(".output-box li span:eq(6)").html(numbersVal);
      }
    });

  });
});