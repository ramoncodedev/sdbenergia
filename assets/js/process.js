(function () {
  'use strict';
  // Etapas (acordeão com imagem)
  var procImg = document.getElementById('procImg');
  var procItems = document.querySelectorAll('.proc__item');
  function showProcImg(src) {
    if (procImg.getAttribute('src') === src) return;
    procImg.style.opacity = 0;
    setTimeout(function () { procImg.src = src; procImg.style.opacity = 1; }, 180);
  }
  procItems.forEach(function (d) {
    d.addEventListener('toggle', function () {
      if (!d.open) return;
      procItems.forEach(function (o) { if (o !== d) o.open = false; });
      showProcImg(d.dataset.img);
    });
  });
})();
