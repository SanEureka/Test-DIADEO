
window.onload = function(){

    // /***************** Sticky NAVBAR ****************************************/
    // The purpose of this function is to set the menu during user navigation.
    window.onscroll = function() {myFunction()};
    // code supposed to run once DOM is loaded
    let navbar = document.getElementById("header-menu");
    console.log(navbar);

    // Get the offset position of the navbar
    let sticky = navbar.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }




// /********************** IMAGE SLIDE +++++++++++++++++++++++++++++++++++/
    function installEventHandler(selector, type, eventHandler)
    {
        let domObject;

        // Retrieving the first DOM object corresponding to the selector.
        domObject = document.querySelector(selector);

        // Installation of an event handler on this DOM object.
        domObject.addEventListener(type, eventHandler);
    }

    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function next() {
        plusSlides(1);
    }

    function prev() {
        plusSlides(-1);
    }

    function autoSlides() {
        plusSlides(1);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    setInterval(autoSlides,8000);

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("slide");

        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[slideIndex-1].style.display = "block";
    }

    // Installation of event managers.
    installEventHandler('.prev', 'click', prev );
    installEventHandler('.next', 'click', next );




    // /***************************** PARALLAX EFFECT ********************************/
    let winScrollTop=0;

    $.fn.is_on_screen = function(){
        let win = $(window);
        let viewport = {
            top : win.scrollTop(),
            left : win.scrollLeft()
        };

        viewport.bottom = viewport.top + win.height();

        let bounds = this.offset();

        bounds.bottom = bounds.top + this.outerHeight();

        return (!(viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    };

    function parallax() {
        let scrolled = $(window).scrollTop();
        $('.parallax-section').each(function(){

            if ($(this).is_on_screen()) {
                let firstTop = $(this).offset().top;
                let $span = $(this).find("span");
                let moveTop = (firstTop-winScrollTop)*0.1 //speed;
                $span.css("transform","translateY("+-moveTop+"px)");
            }

        });
    }

    $(window).scroll(function(e){
        winScrollTop = $(this).scrollTop();
        parallax();
    });

};




