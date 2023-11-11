
(function () {
    emailjs.init('uSrPVjxywqHxSzHMt'); // Replace with your EmailJS user ID
})();

function sendMail() {
        // Get the form element
        const form = document.getElementById('contact-form');

        // Get the values from the form
        const params = {
            from_name: document.getElementById('fullname').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value,
            subject: document.getElementById('subject').value
        };

        // Use sendForm with the form element
        emailjs.send('service_8m2mala', 'template_cq8bbaw', params)
            .then(function () {
                document.getElementById('contact-form').reset();    
                console.log('SUCCESS!');
            }, function (error) {
                console.log('FAILED...', error);
            });
        }


const popup = document.getElementById("popup");
const readMore = document.getElementById("read-more");

// Add click event listener to "Read more" link
readMore.addEventListener("click", function () {
    popup.style.display = "block";
});

// Get reference to the "Close" link inside the popup
const closePopup = document.getElementById("close-popup");

// Add click event listener to the "Close" link to hide the popup
closePopup.addEventListener("click", function () {
    popup.style.display = "none";
});

// Close the popup if the user clicks outside the popup
window.addEventListener("click", function (e) {
    if (e.target === popup) {
        popup.style.display = "none";
    }
});


$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Software Developer", "IT Undergrad"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Software Developer", "IT Undergrad"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});




