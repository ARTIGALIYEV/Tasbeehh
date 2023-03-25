
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
