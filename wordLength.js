const wordLengths = function(arr) {

    for (let i = 0; i < arr.length; i++) {

        let wordLength = arr[i].length;
        arr[i] = wordLength;

    }

    return arr;

}

let testArray = ["Halloween", "Thanksgiving", "Christmas"];

console.log(testArray);
console.log(wordLengths(testArray));
console.log(testArray);

const wordLengthsNewArray = function(arr) {

    let resultArray = [];

    for (let i = 0; i < arr.length; i++) {

        resultArray.push(arr[i].length);

    }

    return resultArray;

}

let testArray2 = ["Halloween", "Thanksgiving", "Christmas"];

console.log(testArray2);
console.log(wordLengthsNewArray(testArray2));
console.log(testArray2);