import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
let minimum = 25;
let maximum = 500;
let GetalUser = parseFloat(await userInput.question('Geef me een getal: '));
if(minimum < GetalUser < maximum){
    //waarom werkt dit niet?
    // Ik zou het kunnen veranderen door if((GetalUser>= minimum)&&(GetalUser<= maximum)) but i want to know why it doesn't work :(
    console.log('Je getal ' + GetalUser + ' ligt tussen 25 en 500.');
}
process.exit();