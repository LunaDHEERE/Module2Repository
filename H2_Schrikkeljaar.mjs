import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
let JaarUser = parseFloat(await userInput.question('Geef me een jaartal: '))
if((JaarUser%4 == 0)&&(JaarUser%100 != 0)&&(JaarUser%400 == 0)){
    console.log('Februari heeft in dit jaar 29 dagen.');
}else{
    console.log('Februari heeft in dit jaar 28 dagen.');
}
// werkt niet, why?
// werkt wel als ik tussen de tweede en derde conditie || plaats, still don't get why tho?
process.exit();