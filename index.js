import { argv } from 'node:process';
import chalk from 'chalk';
import randomColor from 'randomcolor';

let color = randomColor();

function pattern() {
  for (let i = 1; i < 4; i++) {
    console.log(chalk.hex(color)('###############################'));
  }
  console.log(chalk.hex(color)('##########' + '           ' + '##########'));
  console.log(chalk.hex(color)('##########  ' + color + '  ##########'));
  console.log(chalk.hex(color)('##########' + '           ' + '##########'));
  for (let i = 1; i < 4; i++) {
    console.log(chalk.hex(color)('###############################'));
  }
}

if (argv.length === 2) {
  //node index.js
  pattern();
} else if (argv.length === 3) {
  //node index.js hue
  //console.log('You chose ' + argv[2]);
  color = randomColor({
    luminosity: 'random',
    hue: argv[2],
  });
  pattern();
} else {
  //node index.js hue luminosity
  //console.log('You chose: ' + argv[3] + ' ' + argv[2]);
  color = randomColor({
    luminosity: argv[3],
    hue: argv[2],
  });
  pattern();
}
