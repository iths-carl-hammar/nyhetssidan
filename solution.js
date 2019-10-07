/*
function square (number){
  let i = 0;
  let nummer = 100;
  let newNummer;
    if( nummer == nummer){
       number * number
       return square
    }   else {
        return false
    }
    
}
*/
function square (number){
    let number = 1;
    let i = 0; 

    while ( i < number){
        i = i + 1;
        number = number*i;
    }
  return square;
}


let  = number(i);






function startWith (text,tecken ){
    let text = ["hello world"];
    let tecken =["0"]; 
    let i = 0; 
      
     for( let i = 0; text.length; i++ );
      if( text[i]  < tecken ){
            return 
      }

    
}
 function difference (number){  
let number = [2, 6, 9, 2, 0, 16, 24]

let largest = numbers[i];
let  smallest = numbers[i];

for (let  i = 0; i < numbers.length; i++) {

    if (numbers[i] > largest) {
        largest = numbers[i];
    }
    else if(numbers[i] < smallest) {
        smallest = numbers[i];
    }

   
}
 }


 const getLongestWord = (str) => {
    const strArr = str.split('');
    let max = 0;
    let result;
    for(let word of strArr){
        if(word.length > max){
            max = word.length
            result = word
        }
    }
    return result
}
const str = ' Det går inte bra fast jag försöker en då . Det är kul .   ';





// function sumTo (input){
//     let sum = 0;
//     let i = 0;
//     while (i < input){
//         i = i+1;
//          if(i%3 == 0){
//              sum = sum +i;
//          } else if (i%5 == 0 ){
//              sum =  sum +i;
//          }
           
//     }

    
//     return sum;
// }

// let summa=sumTo(12);
// console.log(summa);

function sumTo (input, div){
    let sum = 0;
    let i = 0;


    while (i < input){
        i = i+1;
         if(i%div == 0){
             sum = sum +i;
         } 
           
    }

    
    return sum;
}

//let summa=sumTo(12,4);
//console.log(summa);

function Between (age, min, max){
    let result;
    if(age > min){
        if(age < max){
            result= true;
        }
        else{
            
             result = false;
        }
        return result;
    }
}
  let tal = Between(12,2,44);
  console.log(tal);


  let str = "hello ";
  let i = 0; 
   while ( i <  str.length){
       str[i];
  
   }

/*
function smallestOfTwo ( num1, num2){
    let result;
   if(num1 < num2){
       result = num1;
       

   }else{
       result = num2;
   }
   return result ;
}
let anwser =   smallestOfTwo(5,10);

      
console.log(anwser);

function smallestOfThree (num1 , num2, num3){
    let min = smallestOfTwo(num1,num2);
    min = smallestOfTwo(min, num3);
    return min

}

let smallest = smallestOfThree(1,5,3);

//console.log(smallest);

function smallestFour(num1,num2,num3, num4){
    let min = smallestOfThree(num1,num2,num3)
    min = smallestOfTwo(min, num4)
    return min
}

let number1 = 100;
let number2 = 200;
let number3 = 30;
let number4 = 4000;

let result = smallestFour(Number1,number2,number3 ,number4);
*/

function containChar (str, char ) {
    for(let i = 0;i < str.length;  i++) {
       if (char == str[i]) {
            return true;
       }
   }
    return false;  
}

let input1 = "hello world";
let input2 = "o";
let result = containChar(input1,input2);
console.log(result);

// function removeChar (input1,input2){
//      let strResult ="";
//       input1 = "";
//       input2 ="";
    
//       for(let i = 0;i < str.length;  i++) {
//         if (char != str[i]) {
//               strResult = strResult + str[i];
//         }
   
      
//     return strResult
// }
// let input1 = "hello world";
// let input2 = "o";
// let result = removeChar(input1, input2);
// console.log(result);


function replaceChar (str,src,target) {
   let strResult = "";
   
     for(let i = 0;i < str.length;  i++) {
       if (src != str[i]) {
          strResult = strResult + str[i];
       } else {
           strResult = strResult + target
       }
   }
      
   return strResult
}

let str = "hello world";
let src = " o";
let target = "y";
let result = replaceChar(str, src , target);
console.log(result);

/*
function substring( str, start, stop){
   
    
   for(let i = 0;i < str.length;  i++) {
       if ( start == str[i]) {
            
       } else if (stop == str[i]) {
           return input2
       }
   }
    


}
let input = " Hello world";
let input1 = 1; 
let input2 = 4;




const getLongestWord = (str) => {
   const strArr = str.split('');
   let max = 0;
   let result;
   for(let word of strArr){
       if(word.length > max){
           max = word.length
           result = word
       }
   }
   return result
}
const str = ' Det går inte bra fast jag försöker en då jag tänker inte så fort';
console.log(getLongestWord(str));

let text = "hello";
let  text1 =  new String("hello");

let arr = [1.23,4]

function containsElement (arr, element){
   let result;
   for(i = 0; i < arr; i++ ){
       if(arr[i] == element){
           result = true;
           break
       } else{
           result = false;
       }
   }
}

let arr = [1,2,3,4,5,6];
let element = 2;
let result = containsElement(arr, element);


function factorial (input){
    let fact = 1;
    let i = 0; 

    while ( i < input){
        i = i + 1;
        fact = fact*i;
    }
  return fact;
}


let fact = factorial(i);


function indexOf (arr, element){

let result;

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == element){
            result = arr[i];
            break; 
        } else{
            result = -1;
        }
    }
    return result;
}

let arr = [1,7,1,0,5];
let element = 1;
let result = indexOf(arr, element);
console.log(result);



function sum (array){
    let sum = 0;
    
    for (let i = 0; i < array.length; i++) {
            sum += array[i] // sum = sum + array[i];
        }
    return sum;
}

let array = [1,7,2,0,5];
let answer = sum(array);
console.log(answer);
*/

function reverse (array){
    let num;
    
    let newArray = [];
    for(i = array.length -1; i >= 0;i--){
        num = array[i];
        newArray.push(num);
    }
   return newArray;
}
let array = [1,2,3,4,5];
let result = reverse(array);
console.log(reverse(array));


function containsElement (arr, element){
    
    let i = 0;
    for(i = 0; i < arr; i++ ){
        if(arr[i] == element){
            result = true;
            break
        } else{
            result = false;
        }
    }
}

let arr = [1,2,3,4,5,6];
let element = 2;
//let result = containsElement(arr, element);

function Unique (array){
    let i = 0; 
    let newArray = [];
    while (1 < array.length){
if(containsElement(newArray,array[i])=== false) {
    newArray.push(array)[i];
}
   i++ 

}
return false
 }

 let = array = [3,3 ,5, 34,1, 5,5];

 let = unik = Unique(array);
 console.log(Unique(array));

function nummer (array){
    let i = 0;
    let nummer = [];

    for(let i = 0; array.length; i++){
        if(array[i] == nummer ){
            return 
        }
    }
}


 

















