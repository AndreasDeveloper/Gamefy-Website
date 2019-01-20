// * --- WEBPACK IMPORT FILES --- * \\
import '../sass/main.scss';

// * --- ScrollOut Implementation --- * \\
console.clear();

ScrollOut({
  cssProps: {
    visibleY: true,
    viewportY: true
  }
});

Splitting({ target: '.intro-content__heading-2' });
