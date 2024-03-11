let color = 'red';
let endsWithD = color.endsWith('d');

//Type Assertion
let word;
word = 'red';
let endsWithD1 = (<string> word).endsWith('d'); //option1
let endsWithD2 = (word as string).endsWith('d'); //option2