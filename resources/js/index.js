// * --- WEBPACK IMPORT FILES --- * \\
import '../sass/main.scss';
import ScrollOut from "scroll-out";

// * --- ScrollOut Implementation --- * \\
(() => {
  console.clear();

  ScrollOut({
    cssProps: {
      visibleY: true,
      viewportY: true
    }
  });
  
})();

// * ------------------------------- * \\
//    CONTENT SLIDER | JS SETUP
// * ------------------------------- * \\

// IIFE
(() => {
  
  // DOM Elements
  const nextBtn = document.querySelector('.next-btn');
  const prevBtn = document.querySelector('.prev-btn');
  const slider = document.querySelector('.slider');
  const main = document.querySelector('.game-slider');

  // Global Variable
  let count = 1;

  // Event Listener | Next Button Setup
  nextBtn.addEventListener('click', function() {
    if (count === 1) {
      shrinkIt();
      //slider.style.left ='-100%';
      $('.slider').delay(1000).animate({left: '-100%'}, 1000);
      zoomIt();
      count = 2;
    } else if (count === 2) {
      shrinkIt();
      //slider.style.left = '-200%';
      $('.slider').delay(1000).animate({left: '-200%'}, 1000);
      zoomIt();
      count = 3;
    }
  });

  // Event Listener | Previous Button Setup
  prevBtn.addEventListener('click', function() {
    if (count === 3) {
      shrinkIt();
      //slider.style.left = '-100%';
      $('.slider').delay(1000).animate({left: '-100%'}, 1000);
      zoomIt();
      count = 2;
    } else if (count === 2) {
      shrinkIt();
      //slider.style.left = '0%';
      $('.slider').delay(1000).animate({left: '0%'}, 1000);
      zoomIt();
      count = 1;
    }
  });

  // Function | - Shrinking images and giving them polygon style when next/prev button was clicked
  const shrinkIt = () => {
    main.style.clipPath = 'polygon(10% 20%, 0% 100%, 100% 100%, 100% 0%, 10% 20%)';

    setTimeout(() => {
      main.style.clipPath = 'polygon(10% 20%, 0% 100%, 100% 100%, 90% 20%, 10% 20%)';
    }, 150); 
    setTimeout(() => {
      main.style.clipPath = 'polygon(10% 20%, 0% 100%, 90% 80%, 90% 20%, 10% 20%)';
    }, 300);
    setTimeout(() => {
      main.style.clipPath = 'polygon(10% 20%, 10% 80%, 90% 80%, 90% 20%, 10% 20%)';
    }, 450);
  };  

  // Function | Zooming into the picture
  const zoomIt = () => {
    setTimeout(() => {
      main.style.clipPath = 'polygon(10% 20%, 0% 100%, 90% 80%, 90% 20%, 10% 20%)';
    }, 2000);
    setTimeout(() => {
      main.style.clipPath = 'polygon(10% 20%, 0% 100%, 100% 100%, 90% 20%, 10% 20%)';
    }, 2150); 

    setTimeout(() => {
      main.style.clipPath = 'polygon(10% 20%, 0% 100%, 100% 100%, 100% 0%, 10% 20%)';
    }, 2300);
    setTimeout(() => {
      main.style.clipPath = 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%, 0% 0%)';
    }, 2450);
  };

})();