const PracticeArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const Names = ["James", "Mark", "Rosa", "Claudia", "David", "Marti", "Kiko"];

let uniRandNums = [];
let newArray = [];

const randomNum = (rnum) => {
    return Math.floor(Math.random() * rnum);
}

const UniqueRandNums = (num) => {
    for(let i = 0; i < num; i++){
        let randNumber = randomNum(num);
        uniRandNums.push(randNumber)

            for(let j = 0; j < uniRandNums.length -1; j++){
    
                if (randNumber !== uniRandNums[j]){

                }  else {

                    uniRandNums.pop();
                    if(uniRandNums.length !== num){
                        UniqueRandNums(num);
                    }

                    break;
                }   
            }   
        }
    return uniRandNums;
}

const PrintRandArr = (arr, numOfItems) => {
    newArray = [];
        UniqueRandNums(arr.length);
        for(let i = 0; i < numOfItems; i++){
            newArray.push(arr[uniRandNums[i]]);
        } 
    return newArray;
}
// first argument - array to randomise, second argument - how many items you want in your final array
console.log(PrintRandArr(PracticeArray, 26));

console.log(UniqueRandNums(15));

