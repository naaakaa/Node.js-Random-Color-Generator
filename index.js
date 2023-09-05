import { argv } from 'node:process';

function pattern() {
  for (let i = 1; i < 4; i++) {
    console.log('%c##### ##### ########### ##### #####', 'color: #334455');
  }
  console.log('##### #####' + '             ' + '##### #####');
  console.log('##### #####   ' + color + '   ##### #####');
  console.log('##### #####' + '             ' + '##### #####');
  for (let i = 1; i < 4; i++) {
    console.log('##### ##### ########### ##### #####');
  }
}

let letters = '0123456789ABCDEF';
let color = '#';
for (let i = 0; i < 6; i++) color += letters[Math.floor(Math.random() * 16)];

if (argv.length === 2) {
  // This happens if there is no user input
  pattern();
} else {
  console.log('You chose ' + argv[2]);
  // color = argv[2];
  // pattern();
}
