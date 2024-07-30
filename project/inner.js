const clickButton = document.getElementById("btn");
const length_Psswrd = document.getElementById("password-box");
const clickOnUpperC = document.getElementById("uppercase-box");
const clickOnLowerC = document.getElementById("lowercase-box");
const clickOnNumber = document.getElementById("number-box");
const inputBox =  document.getElementById("inpt");

const alphabet = ["A","B","C","D","E","F","G","H","I","J"];
const smallAlpha = ["a","b","c","d","e","f","g","h","i","j"];
const digit = [1,2,3,4,5,6,7,8,9,0];
const newChr = [...alphabet,...smallAlpha];
const mixChr1 = [...alphabet,...digit];
const mixChr2 = [...smallAlpha,...digit];
const totalPsswrd = [...alphabet,...smallAlpha,...digit];


function randomPasswordGenerater(){
    if(clickOnUpperC.checked){
        let randomChr = "";
        for(let i = 0; i < length_Psswrd.value ;i++){
            let random = Math.floor(Math.random() * alphabet.length);
            randomChr += alphabet[random];
          }
          inputBox.innerText = randomChr;
         }
         if(clickOnLowerC.checked){
            let randomChr = "";
          for(let i = 0; i < length_Psswrd.value; i++){
              let randomT = Math.floor(Math.random() * smallAlpha.length);
              randomChr += smallAlpha[randomT];
          }
          inputBox.innerText = randomChr;
        }
        if(clickOnNumber.checked){
         let randomChr = "";
        for(let i = 0; i < length_Psswrd.value; i++){
            let randomT = Math.floor(Math.random() * digit.length );
            randomChr += digit[randomT];
        }
        inputBox.innerText = randomChr;
        }
        if(clickOnNumber.checked && clickOnLowerC.checked){
        let empty = "";
        for(let i = 0; i < length_Psswrd.value; i++){
            let randomN = Math.floor(Math.random() * mixChr2.length);
            empty += mixChr2[randomN];
        }
        inputBox.innerText = empty;
        }
        if(clickOnUpperC.checked && clickOnLowerC.checked){
        let empty = "";
        for(let i = 0; i < length_Psswrd.value; i++){
            let randomN = Math.floor(Math.random() * newChr.length);
            empty += newChr[randomN];
        }
        inputBox.innerText = empty;
        
        }
        if(clickOnUpperC.checked && clickOnNumber.checked){
        let empty = "";
        for(let i = 0; i < length_Psswrd.value; i++){
            let randomN = Math.floor(Math.random() * mixChr1.length);
            empty += mixChr1[randomN];
        }
        inputBox.innerText = empty;
        }
        if(clickOnUpperC.checked && clickOnLowerC.checked && clickOnNumber.checked){
        let empty = "";
        for(let i = 0; i < length_Psswrd.value; i++){
            let randomN = Math.floor(Math.random() * totalPsswrd.length);
            empty += totalPsswrd[randomN];
        }
        inputBox.innerText = empty;
        }
 }
clickButton.addEventListener('click',randomPasswordGenerater);






















