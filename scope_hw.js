//Episode 1
//const scenario = {
  //murderer: 'Miss Scarlet',
  //room: 'Library',
  //weapon: 'Rope'
//};

//const declareMurderer = function() {
  //return `The murderer is ${scenario.murderer}.`;
//}

//const verdict = declareMurderer();
//console.log(verdict);

//I think the predicted outcome will be Miss Scarlet b/c the const declareMurder function is asking
//to return the murderer within the defined const scenario
//Prediction was correct

//Episode 2
//const murderer = 'Professor Plum';

//const changeMurderer = function() {
  //murderer = 'Mrs. Peacock';
//}

//const declareMurderer = function() {
  //return `The murderer is ${murderer}.`;
//}

//changeMurderer();
//const verdict = declareMurderer();
//console.log(verdict);
//console.log(verdict);

//I think the predicted outcome will be Mrs. Peacock b/c the log is calling on the changeMurderer()
//function
//Prediction incorrect--received error 


//Episode 3
//let murderer = 'Professor Plum';

//const declareMurderer = function() {
  //let murderer = 'Mrs. Peacock';
  //return `The murderer is ${murderer}.`;
//}

//const firstVerdict = declareMurderer();
//console.log('First Verdict: ', firstVerdict);

//const secondVerdict = `The murderer is ${murderer}.`;
//console.log('Second Verdict: ', secondVerdict);
//I think the 1st Verdict will be Mrs. Peacock b/c she's declared first in const
// declareMurderer, and the 2nd Verdict will be Professor Plum
//Prediction was correct


//Episode 4
//let suspectOne = 'Miss Scarlet';
//let suspectTwo = 'Professor Plum';
//let suspectThree = 'Mrs. Peacock';

//const declareAllSuspects = function() {
  //let suspectThree = 'Colonel Mustard';
  //return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
//}

//const suspects = declareAllSuspects();
//console.log(suspects);
//console.log(`Suspect three is ${suspectThree}.`);
//I think the outcome will be Colonel Mustard for suspect three for the 1st log
//and Suspect Three will be Mrs. Peacock for the second log
//Prediction correct

//Episode 5
//const scenario = {
  //murderer: 'Miss Scarlet',
  //room: 'Kitchen',
  //weapon: 'Candle Stick'
//};

//const changeWeapon = function(newWeapon) {
  //scenario.weapon = newWeapon;
//}

//const declareWeapon = function() {
  //return `The weapon is the ${scenario.weapon}.`;
//}

//changeWeapon('Revolver');
//const verdict = declareWeapon();
//console.log(verdict);
//I think the weapon will be the revolver
//Prediction correct


//Episode 6
//let murderer = 'Colonel Mustard';

//const changeMurderer = function() {
  //murderer = 'Mr. Green';

  //const plotTwist = function() {
    //murderer = 'Mrs. White';
  //}

  //plotTwist();
//}

//const declareMurderer = function () {
  //return `The murderer is ${murderer}.`;
//}

//changeMurderer();
//const verdict = declareMurderer();
//console.log(verdict);
//I think the murder will be Mrs. White
//Prediction correct


//Episode 7
//let murderer = 'Professor Plum';

//const changeMurderer = function() {
  //murderer = 'Mr. Green';

  //const plotTwist = function() {
    //let murderer = 'Colonel Mustard';

    //const unexpectedOutcome = function() {
      //murderer = 'Miss Scarlet';
    //}

    //unexpectedOutcome();
  //}

  //plotTwist();
//}

//const declareMurderer = function() {
  //return `The murderer is ${murderer}.`;
//}

//changeMurderer();
//const verdict = declareMurderer();
//console.log(verdict);
//I think the murderer will be Mr.Green b/c he's a declared const for the
//changeMurderer function & that's what's being ref'd before the log
//Prediction correct

//Episode 8
//const scenario = {
  //murderer: 'Mrs. Peacock',
  //room: 'Conservatory',
  //weapon: 'Lead Pipe'
//};

//const changeScenario = function() {
  //scenario.murderer = 'Mrs. Peacock';
  //scenario.room = 'Dining Room';

  //const plotTwist = function(room) {
    //if (scenario.room === room) {
      //scenario.murderer = 'Colonel Mustard';
    //}

    //const unexpectedOutcome = function(murderer) {
      //if (scenario.murderer === murderer) {
        //scenario.weapon = 'Candle Stick';
      //}
    //}

    //unexpectedOutcome('Colonel Mustard');
  //}

  //plotTwist('Dining Room');
//}

//const declareWeapon = function() {
//  return `The weapon is ${scenario.weapon}.`
//}

//changeScenario();
//const verdict = declareWeapon();
//console.log(verdict);
//I think the weapon will be the Candle Stick b/c in the const unexpectedOutcome
//the weapon changes to a Candle Stick when the murder changes
//Prediction correct


//Episode 9
let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);
//I think the murder will be Prof Plum b/c murderer is set to equal him with the
//'let' at the start of the function & in the 'if' statement it says to only 'let'
//the murderer be Mrs. Peacock if murderer doesn't equal Prof Plum
//Prediction correct
