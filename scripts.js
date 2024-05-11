// scripts.js

// Get reference to the container
var animationContainer = document.getElementById('animation-container');
// Load animation JSON file
var animation = bodymovin.loadAnimation({
    container: animationContainer,
    renderer: 'svg', // Use 'canvas' or 'html' for different rendering options
    loop: true, // Set loop to true or false as needed
    autoplay: true, // Set autoplay to true or false as needed
    path: 'Animation.json' // Path to your animation JSON file
});

$(document).ready(function () {
    $('.home_hello').slideDown("slow");
    $(".home-name").animate({top: '150px'});
    $('.Portfolio').hide();
    $('.Educational').hide();
    $('.My-skills').hide();
    $('.Gallery').hide();
    $('.Personal-info').hide();
})

$('#Personal-info').on('click',function() {
    $('.Home').hide();
    $('.Portfolio').hide();
    $('.Educational').hide();
    $('.My-skills').hide();
    $('Gallery').hide();
    $('.Personal-info').fadeIn('slow')
});

$('#Home').on('click', function () {
    $('.Home').fadeIn('slow');
    $('.Portfolio').hide();
    $('.Educational').hide();
    $('.My-skills').hide();
    $('Gallery').hide();
    $('.Personal-info').hide();
})

$('#Portfolio').on('click', function () {
    $('.Home').hide();
    $('.Portfolio').fadeIn('slow')
    $('.Educational').hide();
    $('.My-skills').hide();
    $('Gallery').hide();
    $('.Personal-info').hide();
})

$('#Educational').on('click', function () {
    $('.Home').hide();
    $('.Portfolio').hide();
    $('.Educational').fadeIn('slow');
    $('.educ').slideDown('slow');
    $('.My-skills').hide();
    $('Gallery').hide();
    $('.Personal-info').hide();
})

$('#My-skills').on('click', function () {
    $('.Home').fadeOut('slow');
    $('.Portfolio').fadeOut('slow')
    $('.Educational').fadeOut('slow');
    $('.My-skills').fadeIn('slow');
    $('Gallery').fadeOut('slow')
    $('.Personal-info').fadeOut('slow')
})

$('#Gallery').on('click', function () {
    $('.Home').hide();
    $('.Portfolio').hide();
    $('.Educational').hide();
    $('.My-skills').hide();
    $('Gallery').fadeIn('slow')
    $('.Personal-info').hide();
})

$('#My-skills').on('click', function () {
    $('.Home').hide();
    $('.Portfolio').hide();
    $('.Educational').hide();
    $('.My-skills').fadeIn();
    $('Gallery').hide('slow')
    $('.Personal-info').hide();
})

// offcanvass
$('#Personal-inf').on('click',function() {
    $('.Home').hide();
    $('.Portfolio').hide();
    $('.Educational').hide();
    $('.My-skills').hide();
    $('Gallery').hide();
    $('.Personal-info').fadeIn('slow')
    let exampleOffcanvas = document.querySelector('#offcanvasExample');
    let offcanvasInstance = bootstrap.Offcanvas.getInstance(exampleOffcanvas);

    offcanvasInstance.hide(); 
});

$('#Hom').on('click', function () {
    $('.Home').fadeIn('slow');
    $('.Portfolio').hide();
    $('.Educational').hide();
    $('.My-skills').hide();
    $('Gallery').hide();
    $('.Personal-info').hide();
    let exampleOffcanvas = document.querySelector('#offcanvasExample');
    let offcanvasInstance = bootstrap.Offcanvas.getInstance(exampleOffcanvas);

    offcanvasInstance.hide(); 
})

$('#Portfoli').on('click', function () {
    $('.Home').hide();
    $('.Portfolio').fadeIn('slow')
    $('.Educational').hide();
    $('.My-skills').hide();
    $('Gallery').hide();
    $('.Personal-info').hide();
    let exampleOffcanvas = document.querySelector('#offcanvasExample');
    let offcanvasInstance = bootstrap.Offcanvas.getInstance(exampleOffcanvas);

    offcanvasInstance.hide(); 
})

$('#Educationa').on('click', function () {
    $('.Home').hide();
    $('.Portfolio').hide();
    $('.Educational').fadeIn('slow');
    $('.educ').slideDown('slow');
    $('.My-skills').hide();
    $('Gallery').hide();
    $('.Personal-info').hide();
    let exampleOffcanvas = document.querySelector('#offcanvasExample');
    let offcanvasInstance = bootstrap.Offcanvas.getInstance(exampleOffcanvas);

    offcanvasInstance.hide(); 
})

$('#My-skill').on('click', function () {
    $('.Home').fadeOut('slow');
    $('.Portfolio').fadeOut('slow')
    $('.Educational').fadeOut('slow');
    $('.My-skills').fadeIn('slow');
    $('Gallery').fadeOut('slow')
    $('.Personal-info').fadeOut('slow')
    let exampleOffcanvas = document.querySelector('#offcanvasExample');
    let offcanvasInstance = bootstrap.Offcanvas.getInstance(exampleOffcanvas);

    offcanvasInstance.hide(); 
})

$('#Galler').on('click', function () {
    $('.Home').hide();
    $('.Portfolio').hide();
    $('.Educational').hide();
    $('.My-skills').hide();
    $('Gallery').fadeIn('slow')
    $('.Personal-info').hide();
    let exampleOffcanvas = document.querySelector('#offcanvasExample');
    let offcanvasInstance = bootstrap.Offcanvas.getInstance(exampleOffcanvas);

    offcanvasInstance.hide();               
})


$('.github').click(function () {
    window.location.href="https://github.com/phlwin722/Shopping-cart-Oche";
})

$('.githubb').click(function () {
    window.location.href="https://github.com/phlwin722/GPS-Tracker-Using-audrino";
})