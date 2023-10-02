import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let Getal1 = parseFloat(await userInput.question('Geef me een eerste getal: '));
let Getal2 = parseFloat(await userInput.question('Geef me een tweede getal: '));
let Getal3 = parseFloat(await userInput.question('Geef me een derde getal: '));
let Getal4 = parseFloat(await userInput.question('Geef me een vierde getal: '));
let Getal5 = parseFloat(await userInput.question('Geef me een vijfde getal: '));
//hoe kan ik kort deze oefening maken?