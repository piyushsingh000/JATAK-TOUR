// gallery start
$(document).ready(function() {

    $('.fancybox').fancybox();

    // Change title type, overlay closing speed
    $(".fancybox-effects-a").fancybox({
        helpers: {
            title: {
                type: 'outside'
            },
            overlay: {
                speedOut: 0
            }
        }
    });
    // Disable opening and closing animations, change title type
    $(".fancybox-effects-b").fancybox({
        openEffect: 'none',
        closeEffect: 'none',
        helpers: {
            title: {
                type: 'over'
            }
        }
    });


    $(document).on('click', '.r-button', function(e) {
        $btn = $(this);
        var $offset = $(this).offset();
        $span = $('<span/>');
        var x = e.pageX - $offset.left
        var y = e.pageY - $offset.top;
        $span.addClass('ripple-span');
        $span.css({
            top: y + 'px',
            left: x + 'px',
        });
        $btn.append($span);
        window.setTimeout(function() {
            $span.remove();
        }, 2200);
    });

});



$(document).ready(function() {


    var owl = $('.testimonial');
    owl.owlCarousel({
        margin: 25,
        nav: true,
        dots: false,
        loop: false,
        autoplay: true,
        autoplaySpeed: 1900,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false
            },
            600: {
                items: 1,
                dots: true,
                nav: false
            },
            1000: {
                items: 3
            }
        }
    })


    var owl = $('.blogsOwl');
    owl.owlCarousel({
        margin: 25,
        nav: true,
        dots: false,
        loop: false,
        autoplay: true,
        autoplaySpeed: 1900,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false
            },
            600: {
                items: 1,
                dots: true,
                nav: false
            },
            1000: {
                items: 3
            }
        }
    })
    // tooltip
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    // tooltip end


    //Check to see if the window is top if not then display button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    //Click event to scroll to top
    $('.scrollToTop').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    // scroll to top end
})



// menu sticky
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.getElementById('navbar_top').classList.add('sticky-top');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('navbar_top').classList.remove('sticky-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
});
// DOMContentLoaded  end



wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    callback: function(box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
});
wow.init();
document.getElementById('moar').onclick = function() {
    var section = document.createElement('section');
    section.className = 'section--purple wow fadeInDown';
    this.parentNode.insertBefore(section, this);
};
// end
// function showContactPopup() {
//     document.getElementById("contactPopupOverlay").style.display = "flex";
// }

// function hideContactPopup() {
//     document.getElementById("contactPopupOverlay").style.display = "none";
// }
function openPayBox() {
    document.getElementById("payPopupOverlay").style.display = "flex";
}

function closePayBox() {
    document.getElementById("payPopupOverlay").style.display = "none";
}
// function openContact() {
//     document.getElementById('contactOverlay').classList.add('showContact');
// }

// function closeContact() {
//     document.getElementById('contactOverlay').classList.remove('showContact');
// }
function openContact() {
    document.getElementById('contactOverlay').classList.add('show');
}

function closeContact() {
    document.getElementById('contactOverlay').classList.remove('show');
}
