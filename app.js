function handeluser1(id){
    player1.innerHTML = `${document.getElementById(`${id}`).value} You are X `
}
function handeluser2(id){
    player2.innerHTML = `${document.getElementById(`${id}`).value} You are O `
}

let num = 0
let chance = "X"
let flag = false
let player1 = document.getElementById("player1")
let player2 = document.getElementById("player2")

let btn1 = document.getElementById("col1_row1")
let btn2 = document.getElementById("col1_row2")
let btn3 = document.getElementById("col1_row3")
let btn4 = document.getElementById("col2_row1")
let btn5 = document.getElementById("col2_row2")
let btn6 = document.getElementById("col2_row3")
let btn7 = document.getElementById("col3_row1")
let btn8 = document.getElementById("col3_row2")
let btn9 = document.getElementById("col3_row3")
let arr =[btn1 , btn2 ,btn3 ,btn4 ,btn5 , btn6 , btn7 ,btn8 ,btn9]

function restart(){
    arr.forEach(btn=>{
        btn.innerHTML =""
    })
    document.getElementById('result').innerHTML = ``
    flag = false
    chance = "X"
    num =0
}

function checkWinner(){
    if( btn1.innerHTML != "" && btn1.innerHTML == btn2.innerHTML && btn1.innerHTML == btn3.innerHTML ){
        document.getElementById('result').innerHTML = `Winner is ${btn1.innerHTML}`
        flag = true
    }else if(btn4.innerHTML == btn5.innerHTML && btn4.innerHTML == btn6.innerHTML && btn4.innerHTML != ""){
        document.getElementById('result').innerHTML = `Winner is ${btn4.innerHTML}`
        flag = true
    }else if(btn7.innerHTML == btn8.innerHTML && btn7.innerHTML == btn9.innerHTML && btn7.innerHTML != ""){
        document.getElementById('result').innerHTML = `Winner is ${btn7.innerHTML}`
        flag = true
    }else if(btn1.innerHTML == btn4.innerHTML && btn1.innerHTML == btn7.innerHTML && btn1.innerHTML != ""){
        document.getElementById('result').innerHTML = `Winner is ${btn1.innerHTML}`
        flag = true
    }else if(btn2.innerHTML == btn5.innerHTML && btn2.innerHTML == btn8.innerHTML && btn2.innerHTML != ""){
        document.getElementById('result').innerHTML = `Winner is ${btn2.innerHTML}`
        flag = true
    }else if(btn3.innerHTML == btn6.innerHTML && btn3.innerHTML == btn9.innerHTML && btn3.innerHTML != ""){
        document.getElementById('result').innerHTML = `Winner is ${btn3.innerHTML}`
        flag = true
    }else if(btn1.innerHTML == btn5.innerHTML && btn1.innerHTML == btn9.innerHTML && btn1.innerHTML != ""){
        document.getElementById('result').innerHTML = `Winner is ${btn1.innerHTML}`
        flag = true
    }else if(btn3.innerHTML == btn5.innerHTML && btn3.innerHTML == btn7.innerHTML && btn3.innerHTML != ""){
        document.getElementById('result').innerHTML = `Winner is ${btn3.innerHTML}`
        flag = true
    }else if(num == 9 && flag == false){
        document.getElementById("result").innerHTML =`The Match Is Draw !!! <br> Please Try Again.`
    }
}

function col(btn){
    let x = document.getElementById(`${btn}`)
    if(!x.innerHTML){
        num++
        flag == false ? x.innerHTML =chance : null           
        checkWinner()    
    }
    if(chance == "X"){
        chance ="O"
    }else{
        chance ="X"
    }
}

// --------------------------------------


// ---------------------------------------------------------------------------------------

// let arr = [{ challenge : "Animal Name" , naam : "LION"} , { challenge : "Body Part" , naam : "HEAD"} , { challenge : "Fruit Name" , naam : "KIWI"}]
// let imgarr = ["./assets/hang1.gif" ,"./assets/hang2.gif" ,"./assets/hang3.gif" ,"./assets/hang4.gif" ,"./assets/hang5.gif" , "./assets/hangmandead.gif" ]
// let selected = document.getElementById("heading1")
// let hangman = document.getElementById('dummy')
// let final = document.getElementById("finally")
// let newgame = document.getElementById('newgame')
// let count = 0
// let index 
// let quest 
// let pressed = []
// let pass = 0
// let fail = 0
// let isGameEnd = true
// // ---------------------------a-b-c-d-e-f-g-h-i-j-k-l-m-n-o-p-q-r-s-t-u-v-w-x-y-z-
// function startGame(val){
//     index = val
//     quest = arr[index-1].naam.split("")            
//     let data = ["Animal Name" , "Body Part" , "Fruit Name"]
//     selected.innerHTML = data[val - 1]
//     selected.style.cssText = "color : green"
//     document.getElementById("list").style.cssText="display : none"
//     document.getElementById("heading").style.cssText="display : inline"        
// }
// arr.map(item=>{
//     console.log(item.challenge);
//     console.log("before ---" ,pressed);
    
//     pressed.push(item.challenge)
//     console.log("after ---" ,pressed);
    
// })
// function checkvalue(val){
//     if(isGameEnd){
//         if(!!index){        
//             if(!pressed.includes(val)){
//                 pressed.push(val)      
//                 let key = val.charCodeAt() - 65    
//                 let alphabet = document.getElementById(`key${key}`)    
//                 alphabet.style.cssText ="background-color : red"
//                 putValue(val)  
//             }      
//         }else{
//             document.getElementById("heading").style.cssText="display : inline" 
//             selected.innerHTML = "Please select the challenge !!"
//             selected.style.cssText = "color :red"
//         }
//     }
// }
// function putValue(val){    
//     if(!quest.includes(val)){
//         fail < 7 ? fail++ : null   
//         hangman.setAttribute("src" , `${imgarr[fail-1]}`)  
//         if (fail == 6) {
//             newgame.style.cssText = "display : inline"
//             isGameEnd = false 
//             final.innerHTML = "Game Over Please try again !!"
//             final.style.cssText = "color : red"
//             fail < 7 ? fail++ : isGameEnd = false
//         }
//     }else{
//         quest.map((item ,index)=>{
//             if (item == val) {
//                 insert(index + 1 , val)            
//             }
//         })
//     }   
// }
// function insert(position , val){
//     pass <= 4 ? pass++ : null
//     if(pass == 4){
//         newgame.style.cssText = "display : inline"
//         isGameEnd = false
//         final.innerHTML = "Congrats Winner !!"
//         final.style.cssText = "color : green"
//     }
//     document.getElementById(`po${position}`).innerHTML = val
// }
// function newGame(){
//     count = 0
//     index = undefined
//     quest = undefined
//     pressed = []
//     pass = 0
//     fail = 0
//     isGameEnd = true
//     document.getElementById("list").style.cssText="display : inline display: flex ; justify-content: space-around ; align-items: center ; width: 50% ; list-style: none ; height: 100px ; font-size: 36px ; color: blueviolet;"
//     document.getElementById("heading").style.cssText="display : none" 
//     for(let i = 0 ;i < 26 ; i++){
//         let alphabet = document.getElementById(`key${i}`)    
//         alphabet.style.cssText ="background-color : rgb(120, 120, 241)"
//         if(i < 5 && i > 0){document.getElementById(`po${i}`).innerHTML ="_"}
//     }
//     newgame.style.cssText = "display : none"
//     final.style.cssText =" display : none"
//     hangman.setAttribute("src" , "./assets/hang0.gif")
// }


// -------------------------------------------------------------------------------------


// let arr = [{ challenge : "Animal Name" , naam : "LION"} , { challenge : "Body Part" , naam : "HEAD"} , { challenge : "Fruit Name" , naam : "KIWI"}]
// let imgarr = ["./assets/hang1.gif" ,"./assets/hang2.gif" ,"./assets/hang3.gif" ,"./assets/hang4.gif" ,"./assets/hang5.gif" , "./assets/hangmandead.gif" ]
// let selected = document.getElementById("heading1")
// let hangman = document.getElementById('dummy')
// let final = document.getElementById("finally")
// let newgame = document.getElementById('newgame')
// let count = 0
// let index 
// let quest 
// let pressed = []
// let game = false
// let pass = 0
// let fail = 0
// let isGameEnd = true
// function startGame(val){
//     game = true
//     index = val
//     quest = arr[index].naam.split("")          
//     let data = ["Animal Name" , "Body Part" , "Fruit Name"]
//     selected.innerHTML = data[val]
//     selected.style.cssText = "color : green"
//     document.getElementById("list").style.cssText="display : none"
//     document.getElementById("heading").style.cssText="display : inline"        
// }
// function checkvalue(val){
//     if(isGameEnd){
//         if(game){        
//             if(!pressed.includes(val)){
//                 pressed.push(val)      
//                 let key = val.charCodeAt() - 65    
//                 let alphabet = document.getElementById(`key${key}`)    
//                 alphabet.style.cssText ="background-color : red"
//                 putValue(val)  
//             }      
//         }else{
//             document.getElementById("heading").style.cssText="display : inline" 
//             selected.innerHTML = "Please select the challenge !!"
//             selected.style.cssText = "color :red"
//         }
//     }
// }
// function putValue(val){    
//     if(!quest.includes(val)){
//         fail < 7 ? fail++ : null   
//         hangman.setAttribute("src" , `${imgarr[fail-1]}`)  
//         if (fail == 6) {
//             newgame.style.cssText = "display : inline"
//             isGameEnd = false 
//             final.innerHTML = "Game Over Please try again !!"
//             final.style.cssText = "color : red"
//             fail < 7 ? fail++ : isGameEnd = false
//         }
//     }else{
//         quest.map((item ,index)=>{
//             if (item == val) {
//                 insert(index + 1 , val)            
//             }
//         })
//     }   
// }
// function insert(position , val){
//     pass <= 4 ? pass++ : null
//     if(pass == 4){
//         newgame.style.cssText = "display : inline"
//         isGameEnd = false
//         final.innerHTML = "Congrats Winner !!"
//         final.style.cssText = "color : green"
//     }
//     document.getElementById(`po${position}`).innerHTML = val
// }
// function newGame(){
//     count = 0
//     index = undefined
//     quest = undefined
//     pressed = []
//     game = false
//     pass = 0
//     fail = 0
//     isGameEnd = true
//     document.getElementById("list").style.cssText="display : inline display: flex ; justify-content: space-around ; align-items: center ; width: 50% ; list-style: none ; height: 100px ; font-size: 36px ; color: blueviolet;"
//     document.getElementById("heading").style.cssText="display : none" 
//     for(let i = 0 ;i < 26 ; i++){
//         let alphabet = document.getElementById(`key${i}`)    
//         alphabet.style.cssText ="background-color : rgb(120, 120, 241)"
//         if(i < 5 && i > 0){document.getElementById(`po${i}`).innerHTML ="_"}
//     }
//     newgame.style.cssText = "display : none"
//     final.style.cssText =" display : none"
//     hangman.setAttribute("src" , "./assets/hang0.gif")
// }

