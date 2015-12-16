(function () {
  'use strict';

  var getNode = function (node) {
    var elem = document.getElementsByClassName(node);
    elem = elem[0];
    return elem;
  };

  var userMenu = getNode('b-user-info__full-info');
  var popup = getNode('b-popup_hiden');

  var hideCheck = function () {
    if (popup.style.display === '') {
      popup.style.display = 'block';
    } else {
      popup.style.display = '';
    }
  };

  userMenu.addEventListener('click', hideCheck);


})();





