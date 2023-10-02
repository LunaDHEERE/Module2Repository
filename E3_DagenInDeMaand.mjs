import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
let maand = await userInput.question('Geef me een maand: ');
let dagen;
switch(maand){
    case 'Januari':
        dagen = 31;
    break;
    case 'Februari':
        dagen = 28;
    break;
    case 'Maart':
        dagen = 31;
    break;
    case 'April':
        dagen = 30;
    break;
    case 'Mei':
        dagen = 31;
    break;
    case 'Juni':
        dagen = 30;
    break;
    case 'Juli':
        dagen = 31;
    break;
    case 'Augustus':
        dagen = 31;
    break;
    case 'September':
        dagen = 30;
    break;
    case 'Oktober':
        dagen = 31;
    break;
    case 'November':
        dagen = 30;
    break;
    case 'December':
        dagen = 31;
    break;

default:
    console.log('Maand bestaat niet.'); 
}
console.log('De maand ' + maand + ' heeft ' + dagen + ' dagen.');

process.exit();