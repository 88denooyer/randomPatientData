/*
 * IGNORE ALL OF THE GARBAGE COMMENTS THAT WERE USED
 * TO FIGURE OUT HOW TO DO THIS
 *
 *
 * the whole JSON is gonna be the variable object
 * using pain and flex variables as a placeholder
 * createIndex creates n number of "users"
 * where the number n is the user ID
 *
 */
//var pain = 10;
//var flex = 5;
//var idNumber = 69;
const FILE_SIZE = 601;
var fs = require("fs");

var object = {};

function createPoorIndex(object){
    object = {};
    for(var i = 1; i < FILE_SIZE; i++){
        object["Patient " + i] = [{"Reported Daily Pain": getRandomStat(8, 11),
            "Reported Daily Flexibility": getRandomStat(1, 4)}];
    }
    return object;
}

function createAverageIndex(object){
    object = {};
    for(var i = 1; i < FILE_SIZE; i++){
        object["Patient " + i] = [{"Reported Daily Pain": getRandomStat(4, 8),
            "Reported Daily Flexibility": getRandomStat(4, 8)}];
    }
    return object;
}

function createGoodIndex(object){
    object = {};
    for(var i = 1; i < FILE_SIZE; i++){
        object["Patient " + i] = [{"Reported Daily Pain": getRandomStat(1, 4),
            "Reported Daily Flexibility": getRandomStat(8, 11)}];
    }
    return object;
}


function createIndex(object){
    object = {};
    for(var i = 1; i < 11; i++){
        // uses random int function to get pain and flex scores
        object["Patient " + i] = [{"Reported Daily Pain": getRandomStat(0, 10),
            "Reported Daily Flexibility": getRandomStat(0, 10)}];
        //object[i] = [{"pain": pain, "flex": flex}]; --> old test portion
    }
    return object;
}

// function to generate random integer between the input bounds
function getRandomStat(lower, upper){
    lower = Math.ceil(lower);
    upper = Math.floor(upper);
    return Math.floor(Math.random() * (upper - lower)) + lower;
}

//x = createIndex(object);
y = createGoodIndex(object);
z = createPoorIndex(object);
a = createAverageIndex(object);

const prettyGood    = JSON.stringify(y, null, 2);
const prettyPoor    = JSON.stringify(z, null, 2);
const prettyAverage = JSON.stringify(a, null, 2);
/*
console.log("Poor Patient");
console.log(prettyPoor);
console.log("=============");
console.log("Good Patient");
console.log(prettyGood);
*/


fs.writeFile("./poor.json", prettyPoor, (err) => {
    if(err){
        console.error(err);
        return;
    };
    console.log("Poor file was created");
});

fs.writeFile("./good.json", prettyGood, (err) => {
    if(err){
        console.error(err);
        return;
    };
    console.log("Good file was created");
});

fs.writeFile("./average.json", prettyAverage, (err) => {
    if(err){
        console.error(err);
        return;
    };
    console.log("Average file was created");
});






/*
for(var i = 0; i < 25; i++){
    console.log(generateRandomPain(10));
    //console.log("=====");
    console.log(getRandomStat(5, 11));
    console.log("===========================")
}
*/
//console.log(y);


//object["users"][1] = {"randomUser ID2": [{"pain": pain, "flex": flex}]};
//console.log(object);

//const prettyPrint = JSON.stringify(object, null, 2);
//console.log(prettyPrint);
/*
object.list1 = ['1', '2'];  // list 1 -> users, 1 -> random id number
object['list2'] = [];
object.list2[0] = 'a';
object['list2'][1] = 'b';

object.list3 = [];
object.list3.push({});
*/
//console.log(object);
//console.log(object.users["randomUser ID 2"]);


//const prettyPrint = JSON.stringify(object, null, 2);
//console.log(prettyPrint);
