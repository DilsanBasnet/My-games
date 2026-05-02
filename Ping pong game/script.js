const canvas =
    document.getElementById("pongCanvas");
const ctx = canvas.getContext("2d");

const paddleWidth = 10; paddleHeight = 80;
const ballSize = 8;

let playerY = (canvas.height - paddleHeight) / 2;
let computerY = (canvas.height - paddleHeight) / 2;

let ballX = canvas.width / 2; ballY = canvas.heigth / 2;
let ballSpeedX = 5; ballSpeedY = 5;
let playerScore = 0; computerScore = 0;


canvas.addEventListener("mousemove", (e) => {
    let rect = canvas.getBoundingClientRect()
    playerY = e.clientY - rect.top - paddleHeight / 2;
});

function update() {
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    if (ballY <= 0 || ballY + ballSize >= canvas.height) {
        ballSpeedY = -ballSpeedY;
    }

    let computerCenter = computerY + paddleHeight / 2;
    if (computerCenter < ballY - 35) computerY += 6;
    else if (computerCenter > ballY + 35) computerY -= 6;

    checkPaddleCollistion();

    if (ballX < 0) {
        computerScore++;
        resetBall();
    } else if (ballX > canvas.width) {
        playerScore++;
        resetBall();
    }
    // d
}
function checkPaddleCollistion() {
    if (ballX < paddleWidth && ballY > playerY && ballY < playerY + paddleHeight) {
        ballSpeedX = -ballSpeedX;
    }

    if (ballX > canvas.width - paddleWidth && ballY > computerY && ballY < computerY + paddleHeight) {
        ballSpeedX = -ballSpeedX;
    }
}

function resetBall() {
    ballX = canvas.width / 2;
    ballY = canvas.height / 3;
    ballSpeedX = -ballSpeedX;
}
function draw() {
    // black
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    //white
    ctx.fillstyle = "white";
    ctx.fillRect(0, playerY, paddleWidth, paddleHeight);


    // CTC
    ctx.setLineDash([10, 10]);
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.strokeStyle = "white";
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballSize, 0, Math.PI * 2);
    ctx.fill();
    ctx.font = "30px Cursive";
    ctx.fillText(playerScore, 200, 50);
    ctx.fillText(computerScore, 600, 50);
}

function gameLoop() {
    draw();
    update();
    requestAnimationFrame(gameLoop);

}
gameLoop();








