let sizes = ["small", "medium", "large"];


console.log(sizes.indexOf("medium")); // 1

console.log(sizes.findIndex(function(choices){
    return choices === "medium"; // 1
}))

console.log(sizes.findIndex(function(choices){
    return choices.startsWith("l")  // 2
}))

let myNumbers = [3, 12, 5, 70, 44, 2];

console.log(myNumbers.filter(function(numbers){
    return numbers < 10;  // 3, 5, 2
}))

console.log(myNumbers.filter(numbers => numbers < 10))  // 3, 5, 2

function demo(){
    let a = 1;
    var b = 2;
    const c = 3;
// these will log, as the console.log is w/in the function in which the variables are declared
    console.log(a);
    console.log(b);
    console.log(c);
}

/* console.log(a);
 console.log(b);
 console.log(c);
 these will all error that they are undefined, as let and const are socped w/in their code block, and var is scoped w/in the function
 */

 
 function timer(){
    let count = 0;
    setInterval(()=>{
        console.log(count)
        count++;

    }, 1000   )
}