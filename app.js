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
