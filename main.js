/*let age = 15;
let BMW = true;

if(age == 15 && BMW){
    alert("Hello World")
}else if (age == 13){
    alert ("GO to home")
}else if(age == 513){
    alert("GO to school")
}else{
    alert("uyga bor")
}

let name = "Behruz";

switch (key) {
    case "4":
        console.log("Hello world");
        break;
    case "5":
        consolr.log("Hello BMW");
        break;
    case "Behruz":
        console.log("Hello BEHRUZ");
        break;
    default: console.log("Hello School");
}*/

/*let name = "Behruz"
function openCase() {
    let num ="Mening ismim" + " " + name;
    console.log(num);
}
openCase();


let age = 17;
let name = Behruz;
function myFunction(){
if(age == 18){
    alert("WELCOME");
}else(age == 17);{
    alert("Hello")
}*/

/*function groupNumbers(arr) {

    var arr = [1,2,3,4,5,6,7,8,9,10];
  
    var evenNumbers = arr.filter(number => number % 2 == 0);
  
    console.log("Even numbers " + evenNumbers);
  }
  
  groupNumbers();*
  
  

  let num = 0;
  const myApp = (el) => {    
  el.innerHTML = num++;
  document.getElementById('tnum').innerHTML = num
  }


  var nun = 0;
  const myApp2 = (el) => {    
  el.innerHTML = num--;
  document.getElementById('tnum').innerHTML = nun  
  }

    let age = 17;
    let name = Behruz;
    function myFunction(){
if(age == 18){
    alert("WELCOME");
}else(age == 17);{
    alert("Hello");
}

let root = document.getElementById("root");
let al = "Alhamdulillah";
let ol = "Allohu akbar";
let la = "La ilaha illallohu vahdahu la shariyka lah. Lahul mulku va lahul hamd. Va huva ala kulli shay in qodiyr"
let h2 = document.getElementById("sub");
let ekran = document.querySelector(".ekran");
document.querySelector(".btn").addEventListener("click", function () {
  console.log(+ekran.value + 1);
  ekran.value = parseInt(ekran.value) + 1;

  if (ekran.value == 3) {
    h2.innerHTML = al;
    console.log(al);
  } else if (ekran.value == 6) {
    h2.innerHTML = ol;
    console.log(ol);
  }else if (ekran.value == 9){
      h2.innerHTML = la;
      console.log(la);
  }
});

document.querySelector(".nol").addEventListener("click", function () {
  document.querySelector(".ekran").value = -1;
});*/


let current = 0;
let h2 = document.querySelector(".h2")
let h1 = "Behruz"
let oo = document.querySelector(".oo")

function currentNum() { 
    current++
    h2.innerHTML = current;
    if(current == 99){
        current = 0
    }

    if(current >= 0 && current <= 33){
        oo.innerHTML = "Subhanolloh"
    }if(current >= 33 && current <= 66){
        oo.innerHTML = "Allhamdulillah"
    }else if(current >=66 && current <= 99){
        oo.innerHTML = "Ollohu Akbar"
    } else if (current == 99){
        oo.innerHTML = h1 
        current = 0
    };
 } 
