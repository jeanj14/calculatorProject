const plusBtn = document.getElementById("plus");
const testParagraph = document.getElementById("test");
const oneBtn = document.getElementById("1");
const twoBtn = document.getElementById("2");
const eqBtn = document.getElementById("equal");
var curCalc = []; //made a list to contain each number and symbol individually
var calcStr = ""
var answer = 0;

/* the plan is to iterate thru the list curCalc and print each item in the array on the console 
so far, that has not happened yet. i will have to use a for loop to iterate thru the array
i think it will be too much code to iterate thru the array in the produceOut function

so far i made some progress where i was able to append numbers 1 and 2 and symbols + 
to the presentNum variable. it was able to output to the p output. when presentNum was initialized as Null, the output was "null" 
followed by the numbers inputted and the plus sign. 
*/


oneBtn.addEventListener("click", function(){appendCalc("1")});
twoBtn.addEventListener("click", function(){appendCalc("2")});
plusBtn.addEventListener("click", function(){appendCalc("+")});
eqBtn.addEventListener("click", outputAns);

/* the goal to append integers to the operation Display <div> is now successful */


function appendCalc(input){
    curCalc.push(input);
    produceOut(input);
}

//the function is something is supposed to concatenate two integers 
// it is used to concatenate another integer to the current number
// if the plus button is pressed, a plus sign will be appended to the current operation

function concatIntegers(a, b){
    var s1 = a.toString();
    var s2 = b.toString();

    var s = s1 + s2;

    c = s.parseInt();

    return c;
}
 
function produceOut(input){
    testParagraph.textContent += input;
    // clear the display div and replace it with the answer of the calculation
}

function outputAns(){
    var ans = answer.toString();
    testParagraph.textContent = ""
    testParagraph.textContent = ans;
}