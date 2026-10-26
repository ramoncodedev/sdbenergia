(function () {
  'use strict';
  // Tipos de sistema (abas + miniaturas)
  var SYS = {
    on:  { n: ['Painel Solar', 'Sua Casa', 'Rede Elétrica'],
           d: 'O sistema gera energia direto dos painéis para a sua casa. O excedente é enviado para a rede da distribuidora e convertido em créditos, abatendo a sua conta. Não funciona sem a rede em caso de falta de luz.' },
    off: { n: ['Painel Solar', 'Baterias', 'Sua Casa'],
           d: 'O sistema é independente da rede elétrica: a energia dos painéis fica armazenada em baterias e alimenta a sua casa a qualquer hora. Indicado para locais sem acesso à rede da distribuidora.' },
    hyb: { n: ['Painel Solar', 'Sua Casa', 'Rede + Baterias'],
           d: 'Une o melhor dos dois mundos: gera economia com créditos na rede e guarda energia em baterias. Quando a rua apaga, a sua casa continua com as luzes acesas.' }
  };
  var tabs = document.querySelectorAll('.tab');
  var sysDesc = document.getElementById('sysDesc');
  function setTab(key) {
    var d = SYS[key];
    tabs.forEach(function (t) {
      var on = t.dataset.tab === key;
      t.classList.toggle('is-active', on);
      t.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    ['n1', 'n2', 'n3'].forEach(function (id, i) { document.getElementById(id).textContent = d.n[i]; });
    sysDesc.textContent = d.d;
  }
  tabs.forEach(function (t) { t.addEventListener('click', function () { setTab(t.dataset.tab); }); });

  var sysMain = document.getElementById('sysMain');
  var thumbs = document.querySelectorAll('#sysThumbs button');
  thumbs.forEach(function (b) {
    b.addEventListener('click', function () {
      thumbs.forEach(function (x) { x.classList.remove('is-active'); });
      b.classList.add('is-active');
      sysMain.style.opacity = 0;
      setTimeout(function () { sysMain.src = b.dataset.src; sysMain.style.opacity = 1; }, 180);
    });
  });
})();
