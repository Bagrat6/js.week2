//1)
let array1 = [1,1,2,2,3];
function freq(arr){
    let temp = [];
    for(let i = 0; i < arr.length; i++){
        let check = false;
        for(let j = 0; j < temp.length; j++){
            if(arr[i] == temp[j]){
               check = true;
               break; 
            }
        }
        if(check == false){
            temp.push(arr[i]);    
        }
    }
    for(let i = 0; i < temp.length; i++){
        let counter = 0;
        for(let j = 0; j < arr.length; j++){
            if(temp[i] == arr[j]){
                counter++;
            }
        }
        console.log(temp[i] + ":" + counter/arr.length);
    }
}
freq(array1);

//2)
let k = "Which would be worse - to live as a monster, or to die as a good man?";
function longestWord(sentence){
    let arr1 = [];
    let str = "";
    for(let char of sentence){
        if(char != " " && char != "," && char != "-"){
            str = str + char;
        }else{
            arr1.push(str);
            str = "";
        }
    }
    arr1.push(str);
    let ma = 0;
    let index;
    for(let i = 0; i < arr1.length; i++){
        if(ma <= arr1[i].length){
            ma = arr1[i].length;
            index = i;
        }
    }
    console.log(arr1[index]);
}
longestWord(k);

//4)
function moving(word){
    let str = "";
    let i;
    for(i = 0; i < word.length - (word.length%3); i+=3){
        for(let j = 1; j <= 2; j++){
            str += word[i + j];
        }
        str += word[i];
    }
    if(word.length%3 == 1){
        str += word[i];
    }else
    if(word.length%3 == 2){
        str += word[i];
        str += word[i + 1];
    }
    console.log(str);
}
let w = "dfgjkloyp";
moving(w);

//5)
function product(arr){
    
    let ma = 1;
    let prod = 1;
    let check = false;
    for(let i = 0; i < arr.length; i++){
        if(!Array.isArray(arr[i])){
            console.log("Invalid");
            return 0;
        }
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j] < 0){
                check = true;
                if(ma == 1){
                    ma = arr[i][j];
                }else if(ma <= arr[i][j]){
                    ma = arr[i][j];
                }
            }
        }
        prod *= ma;
        ma = 1;
    }
    if(check == false){
        console.log("No negatives");
    }else{
        console.log(prod);
    }
}
let arTest = [2, -9, -3, 0, [1, 2], [-4 , -11, 0]];
product(arTest);

//3)
function substring(sentence){
    let ma = "";
    for(let i = 0; i < sentence.length; i++){
        for(let j = i + 1; j < sentence.length; j++){
            let s = sentence.substring(i,j);
            if(s.includes(sentence[j]) && sentence[j] !== " "){
                if(s.length >= ma.length){
                    ma = s;
                }
            break;
            }
        }
    }
    console.log(ma);
}
let s1 = "parting your soup is not a miracle, bruce.";
substring(s1);

// 6)

function subarrays(arr){
   let ans = [];
   let temp = [0,0,0];
   
   if(arr.length < 3){
     return arr;
   }
   for ( let i = 0 ; i < arr.length - 2 ; i++){
     for ( j = i+1 ; j < arr.length - 1 ; j++){
        for(let k = j + 1;k != arr.length; k++){
           temp = [arr[i],arr[j],arr[k]];
           ans.push(temp);
        }
     }
   }
   return ans;
 }
let arr2 = [5, 9, 23, 0, -2, -1];
subarrays(arr2);
