console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let reset= document.getElementById("reset");
let GameOver = false;

// Funtion to change the turn
const changeTurn = ()=>{
    return turn === "X"?"0":"X";
};

//Function to check for a win

const checkWin = ()=>
{
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0,1,2,0,-10,0],
        [3,4,5,0,0,0],
        [6,7,8,0,10,0],
        [0,3,6,-10,0,90],
        [1,4,7,0,0,90],
        [2,5,8,10,0,90],
        [0,4,8,0,0,45],
        [2,4,6,0,0,-45]
    ];
    wins.forEach((e)=>{

        if(boxtext[e[0]].innerText!=="" && boxtext[e[0]].innerText===boxtext[e[1]].innerText&& boxtext[e[0]].innerText===boxtext[e[2]].innerText)
        {
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " Won";
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "80%";
            GameOver = true;
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`; 
           document.querySelector(".line").style.height = "3px";
        }
        
    });
    

};

//Main Logic Here
//  music.play();

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click",()=>{

        if(boxtext.innerText==="")
        {
            boxtext.innerText =turn;
            turn=changeTurn();
            audioTurn.play();
            checkWin();
            if(!GameOver)
            {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
           
        }


    })
});

//Add Event Listener to reset button
reset.addEventListener("click",()=>{
    
    Array.from(boxes).forEach((element)=>{
        let boxtext = element.querySelector(".boxtext");
        boxtext.innerText ="";

    })
    // document.getElementsByClassName("gif").style.width = "0%";
    document.querySelector(".line").style.transform = "";
    document.querySelector(".line").style.height = "0px";
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0%";
    turn = "X";
    

    Gameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
});