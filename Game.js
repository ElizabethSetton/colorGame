var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("nav__span");
var squares = [];


startGame();
console.log(colorDisplay);
console.log(squares);
function startGame(squareNum) {
	squares = [];
	removeSquare();
	for(var i = 0; i < squareNum; i++) {
		createSquare();
	}
	setTimeout(function(){  
		colorDisplay.textContent = randomColorDisplayFromSquares(squareNum);
		console.log(colorDisplay);
    }, 0);
	console.log(squares);
}
function removeSquare() {
	var board = document.getElementById('board');
	while (board.firstChild) {
		board.removeChild(board.firstChild);
	}
}
function createSquare() {
	var board = document.getElementById('board');
	var square = document.createElement('div');
	square.setAttribute('class', 'board__square');
	square.addEventListener('click', checkIfMatch);
	squares.push(square);
	square.style.background = randomColor();
	board.appendChild(square);
}

function checkIfMatch() {
	var clickedColor = this.style.background;
	console.log("check if match");
	if (clickedColor === colorDisplay) {
		messageDisplay.innerHTML = "Correct!";
		// resetButton.textContent = "Play Again?"
		// changeColors(clickedColor);
		// h1.style.background = clickedColor;
		console.log("check if match --- yes");
	} else {
		this.style.background = "#232323";
		messageDisplay.textContent = "Try Again"
		console.log("check if match --- no");
		}
}

function changeColors(pickedColor) {

}

function randomColorDisplayFromSquares(squareNum) {
	var i = Math.floor(Math.random() * squareNum);
	colorDisplay = squares[i].style.background;
	return colorDisplay;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}




// var numSquares = 6;
// var colors = [];
// var pickedColor;
// var squares = document.querySelectorAll(".square");
// var colorDisplay = document.getElementById("colorDisplay");
// var messageDisplay = document.querySelector("#message");
// var h1 = document.querySelector("h1");
// var resetButton = document.querySelector("#reset");
// var modeButtons = document.querySelectorAll(".mode");


// init();

// resetButton.addEventListener("click", function() {
// 	reset();
// });

// function init(){
// 	setupModeButtons();
// 	setupSquares();
// 	reset();
// }

// function setupModeButtons(){
// 	for (var i = 0; i < modeButtons.length; i++) {
// 		modeButtons[i].addEventListener("click", function(){
// 			modeButtons[0].classList.remove("selected");
// 			modeButtons[1].classList.remove("selected");
// 			this.classList.add("selected");
// 			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
// 			reset();
// 		});
// 	}
// }

// function setupSquares(){
// 	for(var i = 0; i < squares.length; i++){
// 	//add click listeners to squares
// 		squares[i].addEventListener("click", function(){
// 			//grab color of clicked square
// 			var clickedColor = this.style.background;
// 			//compare color to pickedColor
// 			if(clickedColor === pickedColor){
// 				messageDisplay.textContent = "Correct!";
// 				resetButton.textContent = "Play Again?"
// 				changeColors(clickedColor);
// 				h1.style.background = clickedColor;
// 			} else {
// 				this.style.background = "#232323";
// 				messageDisplay.textContent = "Try Again"
// 			}
// 		});
// 	}
// }

// function reset(){
// 	colors = generateRandomColors(numSquares);
// 	//pick a new random color from array
// 	pickedColor = pickColor();
// 	//change colorDisplay to match picked Color
// 	colorDisplay.textContent = pickedColor;
// 	resetButton.textContent = "New Colors"
// 	messageDisplay.textContent = "";
// 	//change colors of squares
// 	for(var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.display = "block"
// 			squares[i].style.background = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// 	h1.style.background = "steelblue";
// }

// function changeColors(color){
// 	//loop through all squares
// 	for(var i = 0; i < squares.length; i++){
// 		//change each color to match given color
// 		squares[i].style.background = color;
// 	}
// }

// function pickColor(){
// 	var random = Math.floor(Math.random() * colors.length);
// 	return colors[random];
// }

// function generateRandomColors(num){
// 	//make an array
// 	var arr = []
// 	//repeat num times
// 	for(var i = 0; i < num; i++){
// 		//get random color and push into arr
// 		arr.push(randomColor())
// 	}
// 	//return that array
// 	return arr;
// }

// function randomColor(){
// 	var r = Math.floor(Math.random() * 256);
// 	var g = Math.floor(Math.random() * 256);
// 	var b = Math.floor(Math.random() * 256);
// 	return "rgb(" + r + ", " + g + ", " + b + ")";
// }

