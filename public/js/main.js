'use strict'
$(document).ready(function() {
  /* Menu button options */
  const menuButton = document.querySelector('.header__button-menu');
  const menuBar = document.querySelector('.section__menu');
  menuButton.addEventListener('click', function() {
    menuBar.classList.toggle('section__menu-disable');
    setTimeout(function() {
      // if (menuBar.hidden === false) { menuBar.hidden = true; }
      // else { menuBar.hidden = false; }
      if (menuBar.style.display !== 'none') {
        menuBar.style.display = 'none';
      } else {
        menuBar.style.display = 'block';
      }
    }, 200);
  });
  /* ----------------------------------------------------------------- */

  /* Mobile menu-bar transforming */
  const leftBlock = document.querySelector('.section__leftBlock');
  const centerBlock = document.querySelector('.section__centerBlock');
  const rightBlock = document.querySelector('.section__rightBlock');
  const row1 = document.querySelector('.section__row1');
  const row2 = document.createElement('div');
  row2.classList.add('row', 'section__row2'); // <div class="row"/> in which blocks will be wrapped in;

  window.addEventListener('resize', function() { // window size watching
    let winWidth = this.innerWidth;
    menuBarTransform(winWidth);
  });

  function menuBarTransform(width) { // function of transform menu bar
    if (width < 1024) {
      row1.append(row2);
      row2.append(leftBlock);
      row2.append(centerBlock);
      row2.append(rightBlock);
      menuBar.classList.remove('col-3');
      menuBar.classList.add('col');
    } else {
      if (row2) {
        row1.append(leftBlock);
        row1.append(centerBlock);
        row1.append(rightBlock);
        row2.remove();
        menuBar.classList.remove('col');
        menuBar.classList.add('col-3');
      }
    }
    console.log(width);
  }
  menuBarTransform(window.innerWidth);
  /* ------------------------------------------------------- */





});