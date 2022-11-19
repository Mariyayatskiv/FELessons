// let button = document.getElementById('button');

// if(button) {
//     button.addEventListener('click', scrollToElementFunc)
// }

// function scrollToElementFunc() {
//     let hiddenEl = document.querySelector('.hidden-el');
//     if(hiddenEl) {
//         hiddenEl.scrollIntoView({
//             behavior: 'smooth',
//             alignToTop: true,
//             block: 'nearest'
//         })

//         // block: start, center, end, nearest
//         // inline: start, center, end, nearest
//     }
// }

// let element = document.getElementById('element');
// element.classList.add('class-1')
// jQuery(element)
// if(element) {
//     element.classList.add('class-1')
// }

// $(element).addClass('class-1')
// element.onclick = () => {
// document.addEventListener('DOMContentLoaded')

// $(document).ready(function() {

// })

// $('#element').click(clickHandler)

// }

// function clickHandler () {
//     jQuery('li').hide(900, 'linear')

//     setTimeout(() => {
//         jQuery('li').show(900)
//     }, 2000);
// }

// $('#element').click(function() {
//     console.log($('li'))
//     $('li').fadeToggle('slow')
// })

// $('.my-slider').slick({
//     infinite: true,
//     responsive: [
//         {
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 3
//             }
//         }
//     ]
// })


const swiper = new Swiper('.my-slider', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });