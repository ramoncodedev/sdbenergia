// Monta o index.html a partir de src/partials/*.html
// Uso: node build.js
const fs = require('fs'), path = require('path');
const dir = path.join(__dirname, 'src', 'partials');
const css = ['base','components','layout','header','footer',
  'sections/hero','sections/pillars','sections/stats','sections/about','sections/solutions',
  'sections/systems','sections/features','sections/process','sections/simulator',
  'sections/projects','sections/payment','sections/testimonials','sections/faq','sections/cta','sections/contact'];
const js = ['config','header','reveal','simulator','systems','panel','process','footer'];
const styles = css.map(f => `<link rel="stylesheet" href="assets/css/${f}.css">`).join('\n');
const scripts = js.map(f => `<script src="assets/js/${f}.js" defer></script>`).join('\n');
const html = fs.readdirSync(dir).filter(f => f.endsWith('.html')).sort()
  .map(f => fs.readFileSync(path.join(dir, f), 'utf8')).join('\n')
  .replace('<!-- @styles -->', styles).replace('<!-- @scripts -->', scripts);
fs.writeFileSync(path.join(__dirname, 'index.html'), html);
console.log('index.html gerado (' + html.length + ' bytes)');
