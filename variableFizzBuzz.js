// This is the normal fizzbuzz problem with one change
// the function takes in two numbers, a value start, and a value end
// log all the numbers from start - end
// if the value is a multiple of 5, log 'fizz'
// if its a multiple of 3, log "buzz"
// if its a multiple of both log "fizzbuzz". 
// end is your upper limit and start is your lower limit. 
// if the end number is lower than the start, console.log("Improper Input");

const fizzbuzz = function (start, end) {

    if (end < start) {
        console.log("Improper Input")
    }

    for (let i = start; i <= end; i++) {

        if (i % 5 === 0 && i % 3 === 0) {
            console.log("fizzbuzz");
    
        } else if (i % 5 === 0) {
            console.log("fizz");
    
        } else if (i % 3 === 0) {
            console.log("buzz");
    
        } else {
            console.log(i)
            
        }

    }

    console.log("\n");

};


fizzbuzz(45, 155);
fizzbuzz(99, 220);
fizzbuzz(80, 25);
// Third one should return "Improper Input";
