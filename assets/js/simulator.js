(function () {
  'use strict';
  var WA = window.SolarCruz.WA;
  var bill = document.getElementById('bill');
  var range = document.getElementById('billRange');
  var saveMonth = document.getElementById('saveMonth');
  var saveYear = document.getElementById('saveYear');
  var cta = document.getElementById('simCta');
  var brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });

  function calc(value) {
    var v = Math.max(0, parseFloat(value) || 0);
    var month = v * 0.95;
    saveMonth.textContent = brl.format(month);
    saveYear.textContent = brl.format(month * 12);
    var msg = 'Olá! Fiz a simulação no site da SDB Energia. Minha conta de luz é de aproximadamente ' + brl.format(v) +
      ' por mês e quero receber uma proposta de energia solar.';
    cta.href = 'https://wa.me/' + WA + '?text=' + encodeURIComponent(msg);
  }
  bill.addEventListener('input', function () {
    range.value = Math.min(Math.max(bill.value, range.min), range.max);
    calc(bill.value);
  });
  range.addEventListener('input', function () { bill.value = range.value; calc(range.value); });
  calc(bill.value);
})();
