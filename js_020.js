let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let msg = document.querySelector("#msg");
let newGame = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container")
let turn0 = true; //playerX player0
const winpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame = ()=>{
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("box was clicked");
        //box.innerHTML = "ABC";
        if(turn0){ // player 0
            box.innerText = "O";
            turn0 = false;
        }else{ // player x
            box.innerText = 'X';
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    })
});

const showWinner = (winner)=>{
    msg.innerHTML = (`congrats the winner is ${winner}`);
    msgContainer.classList.remove("hide");
}

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const disableboxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const checkWinner = () =>{
    for (pattern of winpattern){
        let pose1 = boxes[pattern[0]].innerText;
        let pose2 = boxes[pattern[1]].innerText;
        let pose3 = boxes[pattern[2]].innerText;

        if(pose1 != "" && pose2 != "" && pose3 != ""){
            if(pose1 === pose2 && pose2 === pose3){
                console.log("winner",pose1);
                showWinner(pose1); 
            }
        }
    }
};

newGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
