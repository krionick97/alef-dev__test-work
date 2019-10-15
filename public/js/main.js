'use strict'
$(document).ready(function() {
  /* Menu button options */
  const menuButton = document.querySelector('.header__button-menu');
  const menuBar = document.querySelector('.section__menu');
  menuButton.addEventListener('click', function() {
    menuBar.classList.toggle('section__menu-disable');
    setTimeout(function() {
      if (menuBar.hidden === false) { menuBar.hidden = true; }
      else { menuBar.hidden = false; }
    }, 400)
  });
  /* -------------------------- */




});