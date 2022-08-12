let lastValue = "0";
let display = document.getElementById("display");
display.textContent = "player 1's turn to play"
// get all div (box) or button
let boxes = document.querySelectorAll(".box");

// set click listener on all boxes
for (let box of boxes) {
    if (box.textContent !=="") {
        return;
    }
    
    if (lastValue === "0") {
        box.textContent = "X";
        display.textContent = "player 2's turn to play";
        checkGamesStatus();
        checkDraw();
    } else {
        box.textContent = "0";
        lastValue = "0";
        display.textContent = "player 1'sturn to play";
        checkGameStatus();
        checkDraw()
    }
    
}

let controlBtn = document.getElementById("controlBtn");
controlBtn.addEventListener("click",() => {
    Window.location.href = "html"
})

function checker(first, second, third) {
    if(
        boxes[first].textContent === "X" &&
        boxes[second].textContent ==="X" &&
        boxes[third].textContent === "X" 
    )  {
        disableButtonsGameIsWon(player1);
}else if (
    boxes[first].textContent === "O" &&
    boxes[second].textContent === "O" &&
    boxes[third].textContent === "O" 
) {
    disableButtonsGameIsWon(player1)
}
}

function checkGameStatus() {
    checker(0, 1, 2);
    checker(3, 4, 5);
    checker(6, 7, 8);
    checker(0, 3, 6);
    checker(1, 4, 7);
    checker(2, 5, 8);
    checker(0, 4, 8);
    checker(0, 3, 6);




}