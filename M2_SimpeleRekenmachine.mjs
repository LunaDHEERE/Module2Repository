import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
let Getal1 = parseFloat(await userInput.question('Geef me een eerste getal: '));
let Getal2 = parseFloat(await userInput.question('Geef me een tweede getal: '));
let ActieGebruiker = parseFloat(await userInput.question('Wat wil je dat ik doe met deze getallen? (1. optellen, 2. aftrekken, 3. vermenigvuldigen, 4. delen '));
let uitkomst;
if(ActieGebruiker == 1){
    uitkomst = Getal1 += Getal2;
    console.log(uitkomst);
}else if(ActieGebruiker == 2){
    uitkomst = Getal1 - Getal2;
    console.log(uitkomst);
}else if(ActieGebruiker == 3){
    uitkomst = Getal1*Getal2;
    console.log(uitkomst)
}else{
    uitkomst = Getal1 / Getal2;
    console.log(uitkomst);
}
process.exit();
