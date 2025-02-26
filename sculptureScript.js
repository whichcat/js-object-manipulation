const sculptureList = require('./data.js'); // import data.js
const sculptureListLengths = [];

// const element = sculptureList[1] // <---- comment out this line in your solution!

for (let i = 0; i < sculptureList.length; i++){
    const element = sculptureList[i];
    sculptureListLengthsElement = Object.assign({}, element);

    for (const key in element){
        sculptureListLengthsElement[key] = element[key].length;
    }

    //console.log("new element:\n", sculptureListLengthsElement);
    sculptureListLengths[i] = sculptureListLengthsElement;
}

console.log("finished list:\n", sculptureListLengths);


// this following snippet is just to show how to iterate an object's keys
// comment this out in your solution!
// for (const key in element){
//     console.log(`${key}: ${element[key].length}`)
// }