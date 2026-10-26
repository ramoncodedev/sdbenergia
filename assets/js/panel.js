(function () {
  'use strict';
  // Painel solar decorativo (SVG)
  var cells = document.getElementById('pvCells');
  if (cells) {
    var NS = 'http://www.w3.org/2000/svg', cols = 6, rows = 10, x0 = 18, y0 = 18, cw = 54, ch = 44, gap = 2, out = '';
    for (var r = 0; r < rows; r++) {
      for (var c = 0; c < cols; c++) {
        out += '<rect x="' + (x0 + c * (cw + gap)) + '" y="' + (y0 + r * (ch + gap)) + '" width="' + cw + '" height="' + ch + '" rx="2" fill="url(#pvCell)"/>';
        out += '<path d="M' + (x0 + c * (cw + gap) + 10) + ' ' + (y0 + r * (ch + gap)) + 'v' + ch + 'M' + (x0 + c * (cw + gap) + 27) + ' ' + (y0 + r * (ch + gap)) + 'v' + ch + 'M' + (x0 + c * (cw + gap) + 44) + ' ' + (y0 + r * (ch + gap)) + 'v' + ch + '" stroke="#5f7694" stroke-opacity=".28" stroke-width=".7"/>';
      }
    }
    for (var rr = 0; rr <= rows; rr++) {
      for (var cc = 0; cc <= cols; cc++) {
        out += '<circle cx="' + (x0 + cc * (cw + gap) - 1) + '" cy="' + (y0 + rr * (ch + gap) - 1) + '" r="1.8" fill="#fff" fill-opacity=".85"/>';
      }
    }
    cells.innerHTML = out;
  }
})();
