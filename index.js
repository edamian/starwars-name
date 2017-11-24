/*
    First version of star wars name generator
*/
const readline = require('readline');
const prompt = require('prompt');

var firstName = 'Omar';
var lastName = 'Lopez';

var firstNameSW = lastName.substring(0,3)+firstName.substring(0,2);
var lastNameSW = lastName.substring(3)+firstName.substring(2);
console.log(firstNameSW+" "+lastNameSW);



