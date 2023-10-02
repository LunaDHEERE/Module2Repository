import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
console.log('Kies een artiest: ');
console.log('1. Red Hot Chili Peppers');
console.log('2. Grandson');
console.log('3. The White Stripes');
console.log('4. The Sore Losers');
let liedjeUser = parseFloat(await userInput.question('Geef je keuze in: '));
switch(liedjeUser){
    case 1:
        console.log('Je koos voor "Red Hot Chili Peppers"');
        console.log('Ze zijn de artist acher de hit: Californication');
    break;
    case 2:
        console.log('Je koos voor "Grandson"');
        console.log('Hij is de artist achter de hit: Blood \\ water');
    break;
    case 3:
        console.log('Je koos voor "The White Stripes"');
        console.log('Ze zijn de artist achter de hit: Seven Nation Army');
    case 4:
        console.log('Je koos voor "The Sore Losers"');
        console.log('Ze zijn de artist achter de hit: Beyond Repair');

default:
    console.log('Gelieve opnieuw je keuze in te voeren.');
}
process.exit();