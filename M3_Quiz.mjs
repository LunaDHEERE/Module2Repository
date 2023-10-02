import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

console.log('Welkom bij de quiz! Beantwoord de volgende 5 vragen:');
console.log('Vraag 1: Wat is de hoofdstad van Duitsland?');
let juisteAntwoorden = 0;
let vraag1 = await userInput.question('Jouw antwoord: ');
if(vraag1 == 'Berlijn'){
    console.log('Goed antwoord!');
    juisteAntwoorden++;
}else{
    console.log('Fout antwoord. Het juiste antwoord is: Berlijn');
}
console.log('Vraag 2: Hoeveel planeten zijn er in ons zonnestelsel? ');
let vraag2 = parseFloat(await userInput.question('Jouw antwoord: '));
if(vraag2 == 8){
    console.log('Goed antwoord!');
    juisteAntwoorden++;
}else{
    console.log('Fout antwoord. Het juiste antwoord is: 8');
}
console.log('Vraag 3: Wat is het grootste zoogdier ter wereld?');
let vraag3 = await userInput.question('Jouw antwoord: ');
if(vraag3 == 'De Blauwe Vinvis'){
    console.log('Goed antwoord!');
    juisteAntwoorden++;
}else{
    console.log('Fout antwoord. Het juiste antwoord is: De Blauwe vinvis.');
}
console.log('Vraag 4: Wie schreef het toneelstuk "Romeo en Julia"?');
let vraag4 = await userInput.question('Jouw antwoord: ');
if(vraag4 =='William Shakespeare'){
    console.log('Goed antwoord!');
    juisteAntwoorden++;
}else{
    console.log('Fout antwoord. Het juiste antwoord is: William Shakespeare');
}
console.log('Vraag 5: Hoeveel poten heeft een spin?');
let vraag5 = parseFloat(await userInput.question('Jouw antwoord: '));
if(vraag5 == 8){
    console.log('Goed antwoord!');
    juisteAntwoorden++;
}else{
    console.log('Fout antwoord. Het juiste antwoord is: 8');
}
console.log('Je hebt ' + juisteAntwoorden + ' van de 5 vragen juist!');
process.exit();
