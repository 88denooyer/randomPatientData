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
var object = {};

function createIndex(object){
    object = {};
    for(var i = 1; i < 11; i++){
        // uses random int function to get pain and flex scores
        object[i] = [{"pain": getRandomStat(0, 10), "flex": getRandomStat(0, 10)}];
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

x = createIndex(object);

const prettyPrint = JSON.stringify(x, null, 2);
console.log(prettyPrint);






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
