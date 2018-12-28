var arrowDown = document.querySelector('.mainNav__link--arrow');

var offElements__arrowDown = document.querySelectorAll('.mainHeader,.mainHeaderLogo__logo,.mainNav--off,.arrow-down-box,.mainHeader__photo, .fa-times, .fa-bars')
var elements = document.querySelectorAll('.mainNav__link--arrow, .mainNav__link--off')

// function addOffClass() {
//     for (var i = 0; i < offElements__arrowDown.length; i++) {
//         offElements__arrowDown[i].classList.toggle('off');
//     }

// }
// function menuV() {
    for (var i = 0; i < elements.length; i++) {
        elements[i].onclick = function () {
            for (var j = 0; j < offElements__arrowDown.length; j++) {
                offElements__arrowDown[j].classList.toggle('off');
            }
        
        }
    }

// }
// menuV();
// $('.mainNav__link--arrow, .mainNav__link--off').on('click', addOffClass);

// Scroll
// $('.mainNav__link--off').on('click', function () {
//     const goToSection = "[data-section=" + $(this).attr('id') + "]";
//     $('body, html').animate({
//         scrollTop: $(goToSection).offset().top - 64
//     })
// })