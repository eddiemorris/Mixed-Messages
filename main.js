let playLineArray = ["Bouncy Up Progression", "Bouncy Down Progression", "Descending Progression", "Ascending Progression", "Random Progression"];
const playLine = playLineArray[Math.floor(Math.random()*playLineArray.length)];

let hasRandom = (Math.floor(Math.random()*2))+1

const majorKey = ["I", "ii", "iii", "IV", "V", "vi", "vii", "I", "ii", "iii", "IV", "V", "vi", "vii"];
const minorKey = ["i", "ii", "III", "iv", "V", "VI", "VII", "i", "ii", "III", "iv", "V", "VI", "VII"];
const majorSubs = ["i", "bII", "bIII", "iv", "v", "VI", "VII", "V/"];
const minorSubs = ["I", "bII", "iii", "IV", "v", "vi", "vii", "V/"];

function key() {
    const scaleKey = (Math.floor(Math.random()*2))+1;
    return scaleKey;
}

let i = key();

let randomDegree;
function firstChord() {
    function initial() {
        
        if (i === 1) {
        initial = majorKey[(Math.floor(Math.random()*7))];
        console.log("Major:");
        finalProg.push(initial);
        } else {
        initial = minorKey[(Math.floor(Math.random()*7))];
        console.log("Minor:");
        finalProg.push(initial);
        }
    }
    initial();
    return initial;
};

function secondChord() {
    function second() {
       
        if (i === 1) {
        second = majorKey[(Math.floor(Math.random()*7))];
        finalProg.push(`${second}`);
        } else {
        second = minorKey[(Math.floor(Math.random()*7))];
        finalProg.push(`${second}`);
        }
    }
    second();
    return second;
};

function thirdChord() {
    function third() {
    
        if (i === 1) {
        third = majorKey[(Math.floor(Math.random()*7))];
        finalProg.push(`${third}`);
        } else {
        third = minorKey[(Math.floor(Math.random()*7))];
        finalProg.push(`${third}`);
        }
    }
    third();
    return third;
};

function fourthChord() {
    function fourth() {
        
        if (i === 1) {
        fourth = majorKey[(Math.floor(Math.random()*7))];
        finalProg.push(`${fourth}`);
        } else {
        fourth = minorKey[(Math.floor(Math.random()*7))];
        finalProg.push(`${fourth}`);
        }
    }
    fourth();
    return fourth;
};

let finalProg = [];

let diff;
function progressionStyle() {
    console.log(playLine);
    firstChord();
    secondChord();
    thirdChord();
    fourthChord();
    const randomMove = () => (Math.floor(Math.random()*2)+1);
    const randomBiggerMove = () => (Math.floor(Math.random()*4)+2);
    if (playLine === playLineArray[4]) {
        console.log(finalProg);
    } else if 
        (playLine === playLineArray[3]) {
            
            if (i === 1) {
            finalProg[1] = majorKey[majorKey.indexOf(`${finalProg[0]}`) + randomMove()];
            finalProg[2] = majorKey[majorKey.indexOf(`${finalProg[1]}`) + randomMove()];
            finalProg[3] = majorKey[majorKey.indexOf(`${finalProg[2]}`) + randomMove()];
        }
            if (i !== 1) {
                finalProg[1] = minorKey[minorKey.indexOf(`${finalProg[0]}`)+ randomMove()];
                finalProg[2] = minorKey[minorKey.indexOf(`${finalProg[1]}`) + randomMove()];
                finalProg[3] = minorKey[minorKey.indexOf(`${finalProg[2]}`) + randomMove()];
            }
            console.log(finalProg);
                     
        }        
     else if 
        (playLine === playLineArray[2]) {
        if (i === 1) {
                finalProg[1] = majorKey[majorKey.lastIndexOf(`${finalProg[0]}`) - randomMove()];
                finalProg[2] = majorKey[majorKey.lastIndexOf(`${finalProg[1]}`) - randomMove()];
                finalProg[3] = majorKey[majorKey.lastIndexOf(`${finalProg[2]}`) - randomMove()];
        }
            if (i !== 1) {
                finalProg[1] = minorKey[minorKey.lastIndexOf(`${finalProg[0]}`) - randomMove()];
                finalProg[2] = minorKey[minorKey.lastIndexOf(`${finalProg[1]}`) - randomMove()];
                finalProg[3] = minorKey[minorKey.lastIndexOf(`${finalProg[2]}`) - randomMove()];
            }
            console.log(finalProg);
                     
        }
     else if 
        (playLine === playLineArray[1]) {
            //Bouncy Down Progression
            if (i === 1) {
                finalProg[1] = majorKey[majorKey.lastIndexOf(`${finalProg[0]}`) - randomBiggerMove()];
                diff = Math.abs(majorKey[majorKey.indexOf(`${finalProg[0]}`)] - majorKey[majorKey.indexOf(`${finalProg[1]}`)]);
                finalProg[2] = majorKey[majorKey.lastIndexOf(`${finalProg[1]}`) + (Math.floor(Math.random(diff)+1))];
                diff = Math.abs(majorKey[majorKey.indexOf(`${finalProg[2]}`)] - majorKey[majorKey.indexOf(`${finalProg[1]}`)]);
                finalProg[3] = majorKey[majorKey.lastIndexOf(`${finalProg[2]}`) - (Math.floor(Math.random(diff)+2))];
        }
            if (i !== 1) {
                finalProg[1] = minorKey[minorKey.lastIndexOf(`${finalProg[0]}`) - randomBiggerMove()];
                diff = Math.abs(minorKey[minorKey.indexOf(`${finalProg[0]}`)] - minorKey[minorKey.indexOf(`${finalProg[1]}`)]);
                finalProg[2] = minorKey[minorKey.lastIndexOf(`${finalProg[1]}`) + (Math.floor(Math.random(diff)+1))];
                diff = Math.abs(minorKey[minorKey.indexOf(`${finalProg[2]}`)] - minorKey[minorKey.indexOf(`${finalProg[1]}`)]);
                finalProg[3] = minorKey[minorKey.lastIndexOf(`${finalProg[2]}`) - (Math.floor(Math.random(diff)+2))];
            }
            console.log(finalProg);
        
        }
     else if 
        (playLine === playLineArray[0]) {
            //Bouncy Up Progression
            if (i === 1) {
                finalProg[1] = majorKey[majorKey.indexOf(`${finalProg[0]}`) + randomBiggerMove()];
                diff = Math.abs(majorKey[majorKey.indexOf(`${finalProg[0]}`)] - majorKey[majorKey.indexOf(`${finalProg[1]}`)]);
                finalProg[2] = majorKey[majorKey.indexOf(`${finalProg[1]}`) - (Math.floor(Math.random(diff)+1))];
                diff = Math.abs(majorKey[majorKey.indexOf(`${finalProg[2]}`)] - majorKey[majorKey.indexOf(`${finalProg[1]}`)]);
                finalProg[3] = majorKey[majorKey.indexOf(`${finalProg[2]}`) + (Math.floor(Math.random(diff)+2))];
        }
            if (i !== 1) {
                finalProg[1] = minorKey[minorKey.indexOf(`${finalProg[0]}`) + randomBiggerMove()];
                diff = Math.abs(minorKey[minorKey.indexOf(`${finalProg[0]}`)] - minorKey[minorKey.indexOf(`${finalProg[1]}`)]);
                finalProg[2] = minorKey[minorKey.indexOf(`${finalProg[1]}`) - (Math.floor(Math.random(diff)+1))];
                diff = Math.abs(minorKey[minorKey.indexOf(`${finalProg[2]}`)] - minorKey[minorKey.indexOf(`${finalProg[1]}`)]);
                finalProg[3] = minorKey[minorKey.indexOf(`${finalProg[2]}`) + (Math.floor(Math.random(diff)+2))];
            }
            console.log(finalProg);
        }
    
}

function fullPicker() {

};




progressionStyle();

