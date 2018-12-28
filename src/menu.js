


// const arrowDown = document.querySelector('.mainNav__link--arrow');

//  const offElements__arrowDown = document.querySelectorAll('.mainNav--off,.arrow-down-box,.mainHeader__photo, .fa-times, .fa-bars')


export default function AddOffClass() {
const arrowDown = document.querySelector('.mainNav__link--arrow');

const offElements__arrowDown = document.querySelectorAll('.mainNav--off,.arrow-down-box,.mainHeader__photo, .fa-times, .fa-bars')


    for (var i = 0; i < offElements__arrowDown.length; i++) {
        offElements__arrowDown[i].onClick(() => this.classList.toggle('off'))
    
    }

}

// $('.mainNav__link--arrow, .mainNav__link--off').on('click', addOffClass);

// // Scroll
// $('.mainNav__link--off').on('click', function () {
//     const goToSection = "[data-section=" + $(this).attr('id') + "]";
//     $('body, html').animate({
//         scrollTop: $(goToSection).offset().top - 64
//     })
// })
