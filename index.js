const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let field1 = document.getElementById("field-1")
let field2 = document.getElementById("field-2")

function generate() {
    let pass1 = []
    let pass2 = []
    field1.value = ""
    field2.value = ""
    
    for (let i = 0; i < characters.length; i++) {
        if (pass1.length < 16 && pass2.length < 16) {
            pass1.push(characters[getRandomNum()])
            field1.value += pass1[i]
            pass2.push(characters[getRandomNum()])
            field2.value += pass2[i]
        }
    }
}

function getRandomNum() {
    let randomNum = Math.floor(Math.random() * characters.length)
    return randomNum
}

