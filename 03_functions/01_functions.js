function calculateScore(...num){
    return num[0]
}

const result = calculateScore(100,200,400);
console.log("result",result);


function calculateScore1(val1,val2,...num){
    console.log(val1);
    console.log(val2)
    console.log(num)
}

const result1 = calculateScore1(100,200,400,500);
console.log("result",result);

