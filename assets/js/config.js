// WhatsApp (ATENÇÃO: confirmar o número de WhatsApp da SDB; por ora usa o telefone fixo (71) 4042-1843)
window.SolarCruz = { WA: '557140421843' };

// Fallback elegante para fotos ainda não adicionadas em assets/img
(function () {
  var svg = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#0f4c9c'/><stop offset='1' stop-color='#061b42'/></linearGradient><linearGradient id='c' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#1d3b6e'/><stop offset='1' stop-color='#0a1a38'/></linearGradient></defs><rect width='800' height='600' fill='url(#g)'/><circle cx='640' cy='120' r='70' fill='#f9b200'/><g stroke='#f9b200' stroke-width='6' stroke-linecap='round'><path d='M640 20v-20M640 220v20M540 120h-20M740 120h20M570 50l-14-14M710 190l14 14M710 50l14-14M570 190l-14 14'/></g><g transform='translate(120 250) skewX(-18)'><rect width='520' height='260' rx='8' fill='#cfd9e8'/><rect x='8' y='8' width='504' height='244' rx='5' fill='url(#c)'/><g stroke='#7ea6dc' stroke-opacity='.45' stroke-width='2'><path d='M92 8v244M176 8v244M260 8v244M344 8v244M428 8v244M8 68v124M8 130h504M8 190h504'/></g></g></svg>";
  var FB = 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
  document.addEventListener('error', function (e) {
    var t = e.target;
    if (t && t.tagName === 'IMG' && !t.dataset.fb) { t.dataset.fb = 1; t.src = FB; }
  }, true);
})();
