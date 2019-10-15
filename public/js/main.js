'use strict'
$(document).ready(function() {

  /* Responsive for mobile menu bar */
  // define the width of the window
  const body = document.querySelector('body');
  body.setAttribute('data-winWidth', window.innerWidth);

  window.addEventListener('resize', function() {    
    let winWidth = this.innerWidth;
    body.setAttribute('data-winWidth', winWidth);
    mobileMenu(winWidth);
  });

  const row1 = document.querySelector('.section__row1');
  const menuBar = document.querySelector('.section__menu'); // define the menu bar
  const leftBlock = document.querySelector('.section__leftBlock');
  const centerBlock = document.querySelector('.section__centerBlock');
  const rightBlock = document.querySelector('.section__rightBlock');
  const div = document.createElement('div');
  div.classList.add('row', 'section__row2');  // the div where blocks are going to be wrapped in

  // function to make the menu bar mobile
  function mobileMenu(width) {
    if (width < 1024) {
      div.append(leftBlock);
      div.append(centerBlock);
      div.append(rightBlock);
      menuBar.after(div);
      menuBar.classList.remove('col-3');
      menuBar.classList.add('col');
    }
    if (width >= 1024) {
      if (div) {
        div.remove();
        row1.append(leftBlock);
        row1.append(centerBlock);
        row1.append(rightBlock);
        menuBar.classList.remove('col');
        menuBar.classList.add('col-3');
      }
    }
  }
  mobileMenu(window.innerWidth);
});