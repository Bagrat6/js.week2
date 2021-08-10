//1
let inputArr = [10,25,16,-5,30,15,24];
let inputNumber = 16;
let results = inputArr.filter(function(item){
    if(item > inputNumber){
        return item;
    }
});
if(results.length > 0){
    console.log(results);
}else{
    console.log("Such values do not exist");
}
//2
let number1 = 19;
let number2 = 42;
let arr = [];
function even(n1,n2){
    for(let i = n1; i <= n2; i++){
        if(i % 2 == 0){
            arr.push(i);
        }
    }
}
even(number1,number2);
let result = arr.join(', ');
console.log(result);
//3
let input = 5457
let inputString = input.toString();
let inputArr = inputString.split('').map(item => Number(item));
function odd(inputArr){

    if(inputArr[0] % 2 != 0){
        if(inputArr.length != 1){
            return odd(inputArr.slice(1));
        }else{
            console.log("True");
            return true;
        }
    }else{
        console.log("False");
        return false;
    }
}
odd(inputArr)
//4
let inputArr = [56,-9,87,-23,0,-105,55,1];
let minPos = inputArr[0];
function min(inputArr){
    
    if(minPos < 0){
        if(inputArr.length != 1){
            minPos = inputArr[1];
            return min(inputArr.slice(1));
        }else{
            return -1;
        }
    }
    
    let temp = inputArr.find(function(item,index){
        if(item >= 0){
            if(minPos > item){
                inputArr = inputArr.slice(index + 1);
                return true;
            }
        }
    }); 
    if(temp != undefined){
        minPos = temp;
    }   else{
        return minPos;
    }
    return min(inputArr);

}
min(inputArr);