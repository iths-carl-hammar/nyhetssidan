


/*
// method indexof   .
function containChar(str  , char){
    let = i;
    let str = "hello world"; // somthins wrong. 
      char = "o";
     str = "hello world har o som 4 index. "
     str = new Array[4].toLowerCase();
     char = new Array[0].toLowerCase();

     for(let i = 0; i < str.length; i++){
           if(char.indexOf(char[i] === 4)){
               return false ;
           } else if( char.indexOf(char[i] === -1)){
               return true ;
           }
     }
}
console.log(containChar(str  , char) );

// funkar i inspector // method slice . 
function removeChar (str,char){
    let str = "hello world";
     char = "o";

    str = str.slice(2,7);
    char = char.slice(0);

    return 'hello world'.charAt(7); // method charAt.
};
let text = removeChar(str, char);
console.log(text);




function setBgGreet(){
    let today = new Date();
    hour = today.getHours();

    if(hour < 12){
        // morning
        document.body,style.backgroundcolor = "red";
        greeting.text.Content ="god morgon";
    } else if( hour < 18 ){
        // afternon
    } else {
        // evning
    }
};
setBgGreet();


// replaceChar 

let word = "Hello world";
let word2 = "o";

function replaceChar(word, word2, word3 ){
    
    if (word.toLowerCase()  === word3){
        console.log(word.replace(word2,word3));
    }
      else { 
          word.replace(word2,word3.replace(after[0],after[0].toUpperCase()));

      }
}
replaceChar("let go hello world" , "0" ,"mall")




// this is a SYNCHRONOUS CALLBACK . as it is executed immediately. körs på en gång . 
function greeting (name){
    console.log('hello  ' + name);
}

function processUserInput (callback){
    let name = prompt('please enter your name');
    callback(name);

}
processUserInput(greeting);


// Async function = asynchronous function. körs när du vill / ofta via server . 

function resolveAfter2section(){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve('resolved');
        },3000);
    });
}

async function asyncCall(){
    console.log('calling');
    let result = await resolveAfter2section();
    console.log(result);
}
asyncCall();

// bubbelsort 
let unsortArray = [10,8,5,9,7,10,1,2,5,4, ];
let swapped;

function bubbleSort(arr){
    swapped = false;
    let end = arr.length -1;
    for(let i = 0;i < end; i++){
        if(arr[i] > arr[+ 1]){
            swapped = true;
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;


        }
    }
    end--;
}
do {
    bubbleSort(unsortArray);
} while (swapped);

// sort 2 bubbelsort 
let bubbelsort = (arr) => {
    let temp 
    for(let i = arr.length; i > 0; i-- ){
        for(let j = 0; j < i; j++){
            if(arr[j] > arr[j+1] ){
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
                                // i går tillbacka för varje loop gång
                                // i står här
let arr = [2,1,3,4,7,9 , 12,16,55,];
          // j jämnför alla till slutet 
console.log(bubbelsort(arr));



// Insert Sort .
let  arr =  [2,0, 4,  9,14,25,7];
//valToInsert = 7;
let insertionSort = arr =>{
    for(let i = 1; i < arr.length;i++){
       let curr = arr[i];
       let j = i - 1; // j = -1

       while(j >= 0 && arr[j] > curr){ // condition is array of j is greater than current value. check the value in the array
           arr[j + 1] = arr[j];
           j--
       }
       arr[+ 1] = curr // arr[0];


    }
    return arr;
};
insertionSort(arr);
console.log(arr);


// search from start and mid and end of array,
// Binary search ONLY WORKS WITH Sorted Arrays.
let array = [23,2,1,5,6,7,4,3,8,9,7,4,65,8,4,55, 67, 12,14,15,];
let startIndex = 0; 
let endIndex = array.length - 1;
let middleIndex = Math.floor((startIndex + endIndex) / 2) // to round down 

function binarySearch (array, target){
    // define Start and End Index 
    let startIndex = 0; 
    let endIndex = array.length - 1;

    // while start Index is less than or equal to End Index <=.
    while(startIndex <= endIndex ){
        // Define Middle Index (This will change when compering)
        let middleIndex = Math.floor((startIndex + endIndex) / 2);
        
        // Compare Middle Index whith Target for match
        if(target === array[middleIndex]){
            return console.log("Target was found at index" + middleIndex);
            
        }
        // search Right side Of Array 
        if(target > array[middleIndex]){
            console.log("Searching the right side of Array") 
            // Assign Start Index and increase the Index by 1 to narrow search
            startIndex = middleIndex + 1;
        }
        // Search Left side Of Array 
        if(target < array[middleIndex]){
            // Assign End Index and increase the Index by 1 to narrow search.
            console.log("Searching the left side of array");
            endIndex = middleIndex - 1;
        } else {
            // Not found in this iteration of the loop . Looping again.
            console.log("Not Found this loop iteration.looping another iteration  array")

        }
        
        
    }
    // if target Is Not Found. 
    console.log("target value not found in in array");
}
let Bin = binarySearch(array);
console.log(Bin)

function Between (age, min, max){
    let result;
    if(age > min){
        if(age < max){
            result = true;
        }
        else{
            
             result = false;
        }
        return result;
    }
}
  let tal = Between(12,2,44);
  console.log(tal);

  function grillkorv (){
      let dyr = 50;
      let billig = 10;
      let mellan = 35;
      let result;
      
      if(dyr > billig){
            result = "är du rik ?";
      }
      if(dyr < billig){
          result = "är du fattig";
      }
      if(mellan > dyr){
          result = "är du snåll eller ? ";
      }
    return result;
    

  }
  let korv = grillkorv();
  console.log(korv);
*
  function ölkrogen(falcon, pripps, sol,){
      let result;
      if(falcon > pripps){
          result = " vilken super äcklig öl ";
      }
      if(pripps < sol){
          result ="mm good öl ";
      }
      if( sol > pripps){
          result = "börjar bli rund under föttern inge mer sol tack";
      }
      return result;
  }
  let beer = ölkrogen(45,40,50);
  console.log(beer);

*/
  function split(str, delim){
    let arrayOut =[]
     str= "4x9x110 x16";
    delim = "x";
    
    
    
    
    let temp = "";
       
      for(let i  in str){
         if( str[i] !== delim){
              temp = temp+str[i];
              i++
         } else {
             arrayOut.push(temp)
             temp="";
         }
        
      }
      arrayOut.push(temp);
      return arrayOut
  }
  let str= "4x9x110 x16";
  let delim = "x";
  

  let newArray = split(str ,delim);
  
  //console.log(newArray);

  
  str.split(" ").reverse().join(" ")
 
  //let = element = ['japan', 'asien','sydkorea'];
   // console.log(element.join(''));

 let ninja = {
     name:["sakuraba", "bad ass"],
     land:"japan",
     hoppy:"to kill",
     food:"susi",
 }

let data = '{"results":[{"name":{"title":"Mr","first":"Naël","last":"Henry"},"email":"Nael.Henry@example.com","nat":"FR"},{"name":{"title":"Miss","first":"Sara","last":"Faure"},"email":"Sara.Faure@example.com","nat":"FR"},{"name":{"title":"Mademoiselle","first":"Christel","last":"Legrand"},"email":"Christel.Legrand@example.com","nat":"CH"},{"name":{"title":"Mr","first":"Domenico","last":"Böhner"},"email":"Domenico.Bohner@example.com","nat":"DE"},{"name":{"title":"Ms","first":"Ingebjørg","last":"Rishaug"},"email":"Ingebjorg.Rishaug@example.com","nat":"NO"},{"name":{"title":"Mr","first":"Edwin","last":"Hudson"},"email":"Edwin.Hudson@example.com","nat":"US"},{"name":{"title":"Ms","first":"Esma","last":"Yılmazer"},"email":"Esma.Yilmazer@example.com","nat":"TR"},{"name":{"title":"Mr","first":"Rasmus","last":"Sakala"},"email":"Rasmus.Sakala@example.com","nat":"FI"},{"name":{"title":"Mr","first":"Nuri","last":"Schuldt"},"email":"Nuri.Schuldt@example.com","nat":"DE"},{"name":{"title":"Mr","first":"Théo","last":"Giraud"},"email":"Theo.Giraud@example.com","nat":"FR"},{"name":{"title":"Mr","first":"Jose","last":"Sanchez"},"email":"Jose.Sanchez@example.com","nat":"GB"},{"name":{"title":"Ms","first":"Lynn","last":"Harink"},"email":"Lynn.Harink@example.com","nat":"NL"},{"name":{"title":"Ms","first":"Layla","last":"Johnson"},"email":"Layla.Johnson@example.com","nat":"NZ"},{"name":{"title":"Mr","first":"Rémi","last":"Arnaud"},"email":"Remi.Arnaud@example.com","nat":"FR"},{"name":{"title":"Monsieur","first":"Nuno","last":"Brun"},"email":"Nuno.Brun@example.com","nat":"CH"},{"name":{"title":"Ms","first":"Paula","last":"Patterson"},"email":"Paula.Patterson@example.com","nat":"AU"},{"name":{"title":"Miss","first":"Encarnacion","last":"Saez"},"email":"Encarnacion.Saez@example.com","nat":"ES"},{"name":{"title":"Mr","first":"Jeff","last":"Marshall"},"email":"Jeff.Marshall@example.com","nat":"IE"},{"name":{"title":"Miss","first":"Felecia","last":"Washington"},"email":"Felecia.Washington@example.com","nat":"AU"},{"name":{"title":"Mr","first":"Marc","last":"Mendez"},"email":"Marc.Mendez@example.com","nat":"ES"},{"name":{"title":"Mr","first":"Waseem","last":"Snoeck"},"email":"Waseem.Snoeck@example.com","nat":"NL"},{"name":{"title":"Mrs","first":"Brooklyn","last":"Duncan"},"email":"Brooklyn.Duncan@example.com","nat":"US"},{"name":{"title":"Mr","first":"Samu","last":"Kangas"},"email":"Samu.Kangas@example.com","nat":"FI"},{"name":{"title":"Mr","first":"Mathias","last":"Larsen"},"email":"Mathias.Larsen@example.com","nat":"DK"},{"name":{"title":"Mrs","first":"Mareike","last":"Bönisch"},"email":"Mareike.Bonisch@example.com","nat":"DE"},{"name":{"title":"Mrs","first":"Liva","last":"Sørensen"},"email":"Liva.Sorensen@example.com","nat":"DK"},{"name":{"title":"Ms","first":"یاسمین","last":"حیدری"},"email":"ysmyn.Hydry@example.com","nat":"IR"},{"name":{"title":"Mr","first":"Adam","last":"Brunet"},"email":"Adam.Brunet@example.com","nat":"FR"},{"name":{"title":"Mr","first":"Gerald","last":"Graves"},"email":"Gerald.Graves@example.com","nat":"US"},{"name":{"title":"Mr","first":"Albert","last":"Nieto"},"email":"Albert.Nieto@example.com","nat":"ES"},{"name":{"title":"Monsieur","first":"Osman","last":"Lecomte"},"email":"Osman.Lecomte@example.com","nat":"CH"},{"name":{"title":"Ms","first":"Mary","last":"Sims"},"email":"Mary.Sims@example.com","nat":"AU"},{"name":{"title":"Mr","first":"Bowe","last":"Meijerink"},"email":"Bowe.Meijerink@example.com","nat":"NL"},{"name":{"title":"Ms","first":"Lindaura","last":"Oliveira"},"email":"Lindaura.Oliveira@example.com","nat":"BR"},{"name":{"title":"Mr","first":"Muhammed","last":"Nordvik"},"email":"Muhammed.Nordvik@example.com","nat":"NO"},{"name":{"title":"Ms","first":"Maelya","last":"Martinez"},"email":"Maelya.Martinez@example.com","nat":"FR"},{"name":{"title":"Mr","first":"اميرحسين","last":"نجاتی"},"email":"myrHsyn.njty@example.com","nat":"IR"},{"name":{"title":"Mr","first":"Gabe","last":"Mccoy"},"email":"Gabe.Mccoy@example.com","nat":"GB"},{"name":{"title":"Mademoiselle","first":"Suzanne","last":"Clement"},"email":"Suzanne.Clement@example.com","nat":"CH"},{"name":{"title":"Miss","first":"Samara","last":"Rezende"},"email":"Samara.Rezende@example.com","nat":"BR"},{"name":{"title":"Ms","first":"Kaja","last":"Kjørstad"},"email":"Kaja.Kjorstad@example.com","nat":"NO"},{"name":{"title":"Mrs","first":"Lucie","last":"Roussel"},"email":"Lucie.Roussel@example.com","nat":"FR"},{"name":{"title":"Mr","first":"Maxime","last":"Brown"},"email":"Maxime.Brown@example.com","nat":"CA"},{"name":{"title":"Ms","first":"یاسمین","last":"سهيلي راد"},"email":"ysmyn.shylyrd@example.com","nat":"IR"},{"name":{"title":"Madame","first":"Yvette","last":"Da Silva"},"email":"Yvette.DaSilva@example.com","nat":"CH"},{"name":{"title":"Miss","first":"Kathleen","last":"Lawrence"},"email":"Kathleen.Lawrence@example.com","nat":"IE"},{"name":{"title":"Mr","first":"Landon","last":"Fox"},"email":"Landon.Fox@example.com","nat":"US"},{"name":{"title":"Ms","first":"Maëva","last":"Lecomte"},"email":"Maeva.Lecomte@example.com","nat":"FR"},{"name":{"title":"Mr","first":"Carter","last":"Evans"},"email":"Carter.Evans@example.com","nat":"NZ"},{"name":{"title":"Mr","first":"Teobaldo","last":"Jesus"},"email":"Teobaldo.Jesus@example.com","nat":"BR"},{"name":{"title":"Ms","first":"Nanna","last":"Kristensen"},"email":"Nanna.Kristensen@example.com","nat":"DK"},{"name":{"title":"Mrs","first":"Willow","last":"Taylor"},"email":"Willow.Taylor@example.com","nat":"NZ"},{"name":{"title":"Mr","first":"Nicolas","last":"Sirko"},"email":"Nicolas.Sirko@example.com","nat":"CA"},{"name":{"title":"Mrs","first":"Freya","last":"Edwards"},"email":"Freya.Edwards@example.com","nat":"NZ"},{"name":{"title":"Mrs","first":"Martha","last":"Alexander"},"email":"Martha.Alexander@example.com","nat":"GB"},{"name":{"title":"Ms","first":"Vildan","last":"Candan"},"email":"Vildan.Candan@example.com","nat":"TR"},{"name":{"title":"Mr","first":"Ivan","last":"Sims"},"email":"Ivan.Sims@example.com","nat":"IE"},{"name":{"title":"Ms","first":"Elisa","last":"Ehlert"},"email":"Elisa.Ehlert@example.com","nat":"DE"},{"name":{"title":"Monsieur","first":"Enver","last":"Boyer"},"email":"Enver.Boyer@example.com","nat":"CH"},{"name":{"title":"Ms","first":"Candelária","last":"Santos"},"email":"Candelaria.Santos@example.com","nat":"BR"},{"name":{"title":"Mr","first":"Murat","last":"Duygulu"},"email":"Murat.Duygulu@example.com","nat":"TR"},{"name":{"title":"Mr","first":"Ayub","last":"Telle"},"email":"Ayub.Telle@example.com","nat":"NO"},{"name":{"title":"Mr","first":"Onni","last":"Heinonen"},"email":"Onni.Heinonen@example.com","nat":"FI"},{"name":{"title":"Mr","first":"Thorbjørn","last":"Mykland"},"email":"Thorbjorn.Mykland@example.com","nat":"NO"},{"name":{"title":"Miss","first":"Tracy","last":"Bryant"},"email":"Tracy.Bryant@example.com","nat":"US"},{"name":{"title":"Mr","first":"Oscar","last":"Møller"},"email":"Oscar.Moller@example.com","nat":"DK"},{"name":{"title":"Mr","first":"Sergio","last":"Little"},"email":"Sergio.Little@example.com","nat":"IE"},{"name":{"title":"Mrs","first":"Kathleen","last":"Jüngling"},"email":"Kathleen.Jungling@example.com","nat":"DE"},{"name":{"title":"Mrs","first":"Marta","last":"Marquez"},"email":"Marta.Marquez@example.com","nat":"ES"},{"name":{"title":"Monsieur","first":"Mathias","last":"Nguyen"},"email":"Mathias.Nguyen@example.com","nat":"CH"},{"name":{"title":"Ms","first":"Pauline","last":"Gundlach"},"email":"Pauline.Gundlach@example.com","nat":"DE"},{"name":{"title":"Mrs","first":"Nur","last":"Vervuurt"},"email":"Nur.Vervuurt@example.com","nat":"NL"},{"name":{"title":"Mr","first":"Clinton","last":"Cooper"},"email":"Clinton.Cooper@example.com","nat":"GB"},{"name":{"title":"Monsieur","first":"Hermann","last":"Henry"},"email":"Hermann.Henry@example.com","nat":"CH"},{"name":{"title":"Mr","first":"آرتين","last":"سهيلي راد"},"email":"artyn.shylyrd@example.com","nat":"IR"},{"name":{"title":"Ms","first":"Deniz","last":"Akgül"},"email":"Deniz.Akgul@example.com","nat":"TR"},{"name":{"title":"Miss","first":"Afşar","last":"Numanoğlu"},"email":"Afsar.Numanoglu@example.com","nat":"TR"},{"name":{"title":"Mrs","first":"Lumi","last":"Haataja"},"email":"Lumi.Haataja@example.com","nat":"FI"},{"name":{"title":"Mr","first":"Juan","last":"Lozano"},"email":"Juan.Lozano@example.com","nat":"ES"},{"name":{"title":"Mr","first":"Fredi","last":"Helfrich"},"email":"Fredi.Helfrich@example.com","nat":"DE"},{"name":{"title":"Mrs","first":"Afşar","last":"Aybar"},"email":"Afsar.Aybar@example.com","nat":"TR"},{"name":{"title":"Mr","first":"Dino","last":"Schäffler"},"email":"Dino.Schaffler@example.com","nat":"DE"},{"name":{"title":"Mrs","first":"Meagan","last":"Epskamp"},"email":"Meagan.Epskamp@example.com","nat":"NL"},{"name":{"title":"Ms","first":"Laura","last":"Jensen"},"email":"Laura.Jensen@example.com","nat":"DK"},{"name":{"title":"Ms","first":"Pinja","last":"Mattila"},"email":"Pinja.Mattila@example.com","nat":"FI"},{"name":{"title":"Mr","first":"Jayden","last":"Ward"},"email":"Jayden.Ward@example.com","nat":"IE"},{"name":{"title":"Mr","first":"Jacob","last":"Poulsen"},"email":"Jacob.Poulsen@example.com","nat":"DK"},{"name":{"title":"Mrs","first":"Cathy","last":"Riley"},"email":"Cathy.Riley@example.com","nat":"IE"},{"name":{"title":"Mrs","first":"Susanna","last":"Kyllingstad"},"email":"Susanna.Kyllingstad@example.com","nat":"NO"},{"name":{"title":"Ms","first":"Donna","last":"Fernandez"},"email":"Donna.Fernandez@example.com","nat":"GB"},{"name":{"title":"Mr","first":"Aron","last":"Krogstad"},"email":"Aron.Krogstad@example.com","nat":"NO"},{"name":{"title":"Mademoiselle","first":"Stefania","last":"Meyer"},"email":"Stefania.Meyer@example.com","nat":"CH"},{"name":{"title":"Ms","first":"Celestine","last":"Dumas"},"email":"Celestine.Dumas@example.com","nat":"FR"},{"name":{"title":"Ms","first":"Charlie","last":"Denys"},"email":"Charlie.Denys@example.com","nat":"CA"},{"name":{"title":"Mr","first":"Veli","last":"Klemm"},"email":"Veli.Klemm@example.com","nat":"DE"},{"name":{"title":"Miss","first":"Alianne","last":"Stroeken"},"email":"Alianne.Stroeken@example.com","nat":"NL"},{"name":{"title":"Mr","first":"Davut","last":"Tazegül"},"email":"Davut.Tazegul@example.com","nat":"TR"},{"name":{"title":"Mr","first":"Jens-Peter","last":"Pingel"},"email":"Jens-Peter.Pingel@example.com","nat":"DE"},{"name":{"title":"Mr","first":"Ailo","last":"Sande"},"email":"Ailo.Sande@example.com","nat":"NO"},{"name":{"title":"Mr","first":"Ted","last":"Lambert"},"email":"Ted.Lambert@example.com","nat":"AU"}]} '
let parsedData = JSON.parse(data);
let users = parsedData.results;
console.log(users[9].email);

  function filterFrench (person){
      return person.nat == "FR"
  }
  //console.log(parsedData.results.filter(filterFrench));

function getEmail(element){
    return element.email

}
let element = parsedData.results;
//console.log(element.map(getEmail));

let names = parsedData.results;
function getName (names){
    return names.name

}
 //console.log(names.map(netName));

let dude = {
    name:"billy the kid",
    job:"chef",
    skills:["Physics", "Bilology", "Chemistry"],
    location:{
        country: "United States",
        state: "California",
    }
}
// JSON.stringify(obj)
//let jsonString = JSON.parse(dude)

// JSON.parse(jsonString)

//let jsonString = "{";
//let obj = JSON.parse(jsonString)



let landskod = parsedData.results.map(filterlandskod)
function filterlandskod(person){
    return person.name.first + " " +  person.name.last + " " + person.nat 
}


console.log(landskod);
let node = document.querySelector("a");
 node = "hello world";
document.querySelector("h1").innerHTML = node;

document.body














/*
// Variables
let userDataRow = 0;
let leftButton = document.getElementById('left');
let rightButton = document.getElementById('right');
let name = document.getElementById('name');
let midSection = document.getElementById('mid-section');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let pd = parsedData.results[userDataRow];
// INIT
pd = parsedData.results[userDataRow]
name.innerText = pd.name.title + " " + pd.name.first + " " + pd.name.last;
midSection.style.backgroundImage = "url(" + parsedData.results[userDataRow].picture.large + ")";
email.innerText = pd.email;
phone.innerText = pd.phone;
const loadUserData = function(){
   pd = parsedData.results[userDataRow];
   name.innerText = pd.name.title + " " + pd.name.first + " " + pd.name.last;
   midSection.style.backgroundImage = "url(" + parsedData.results[userDataRow].picture.large + ")";
   email.innerText = pd.email;
   phone.innerText = pd.phone;
}
leftButton.addEventListener("click", function(event){
   if(userDataRow > 0){
       userDataRow--;
   }
   loadUserData()
})
rightButton.addEventListener("click", function(event){
   if(userDataRow < parsedData.results.length-1){
       userDataRow++;
   }
   loadUserData()
})



//for(let i = 0; i < 40; i++){
   // let btn = document.createElement("button");
   // btn.innerText = i;
  //  document.body.appendChild(btn);
    
  //  btn.addEventListener("click", function(event){
    //  event.target.classList.toggle("alternate")
      //     event.target.remove(btn)

           
  //  })
    
      
    
  //  document.body.appendChild(btn);

// }
*/



