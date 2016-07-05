'use strict';

let mainNavElement = document.getElementById('main-nav');
let mainNavVisibleElement = document.getElementById('main-nav-toggle');

mainNavVisibleElement.addEventListener('click', () => {
  if (mainNavElement.classList.contains('open-nav')) {
    mainNavElement.classList.remove('open-nav');
    mainNavElement.classList.add('close-nav');
  } else {
    mainNavElement.classList.remove('close-nav');
    mainNavElement.classList.add('open-nav');
  }
});
