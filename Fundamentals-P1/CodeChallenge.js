/*
Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both 
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall.
*/

let markBMI, johnBMI;

let markMass = 95;
let markHeight = 1.88;

let johnMass = 85;
let johnHeight = 1.76;

markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / johnHeight ** 2;

let markHeightBMI = (markBMI > johnBMI);

//console.log(markBMI, johnBMI, markHeightBMI);

if (markHeightBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})! `);
} else {
    console.log(`John's BMI (${johnBMI}) is higher then Mark's (${markBMI})!`);
}

//Data 1: 27.309968138370508 24.194608809993426 true
//Data 2: 26.87867813490267  27.44059917355372 false