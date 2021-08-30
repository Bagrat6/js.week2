//2
let number = 29;
function sumOfDigits(n,sum = 0){
    sum += n%10;
    n = Math.floor(n/10);
    if(n == 0){
        if(sum > 9){
            return sumOfDigits(sum)
        }else{
            return sum;
        }
    }
    return sumOfDigits(n,sum);
}
sumOfDigits(number);

//5
let arr = [1,3,5,7,9,10];
let ma = Math.max(...arr);
let mi = Math.min(...arr);
console.log(ma - mi + 1 - arr.length);

//4
let inputt = "495803";
let n = 3;
for(let i = 0; i <= inputt.length - n; i++){
    console.log(inputt.slice(i,i + n));
}

//3
let o = {
    a: '1',
    k: '3',
    b: '2',
    c: '2',
    d: '2',
    f: '5',
    t: '5'
};
let tempArr = [];
let res = {};
for(let key in o){
    tempArr.push(o[key]);
}
for(let i = 0; i < tempArr.length - 1; i++){
    let t = true;
    for(let j = i + 1; j < tempArr.length; j++){
        if(tempArr[i] == tempArr[j]){
            t = false;
            tempArr.splice(j,1);
            --j;
        } 
    }
    if(t == true){
        tempArr.splice(i,1);
        --i;
    }
}
for(let j = 0; j < tempArr.length; j++){
    let a = [];
    for(let key in o){
        if(!(tempArr.includes(o[key]))){
            res[o[key]] = key;
        }else{
            if(o[key] == tempArr[j]){
                a.push(key);
            }
        }
    }
    res[tempArr[j]] = a;
}
res

//1
let inputArr = [1,[3,4,[1,2]],10,9,7,[7,9,0],9];
function flatten(arr, res = []){
    
    for(let i = 0; i < arr.length; i++){
        if(!(Array.isArray(arr[i]))){
            res.push(arr[i]);
        }else{
            flatten(arr[i],res);
        }
    }
    return res;
}
flatten(inputArr);