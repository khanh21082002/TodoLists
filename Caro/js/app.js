document.addEventListener("DOMContentLoaded", function () {
    const settingsElement = document.getElementById("settings");
    const boardElement = document.getElementById("board");
  
    function startGame() {
      const rows = parseInt(document.getElementById("rows").value);
      const cols = parseInt(document.getElementById("cols").value);
  
      if (isNaN(rows) || isNaN(cols) || rows < 5 || cols < 5 || rows > 20 || cols > 20) {
        alert("Please enter valid values for rows and columns (between 5 and 20).");
        return;
      }  
       initializeGame(rows, cols);
    }

    function initializeGame(rows, cols) {
        settingsElement.style.display = "none";

        let board = new Array(rows).fill(0).map(() => new Array(cols).fill(0));
        let currentPlayer = 1;

        function drawBoard() {
            boardElement.innerHTML = "";
            for (let row = 0; row < rows; row++) {
                for (let col = 0; col < cols; col++) {
                   const cell = document.createElement("div");
                   cell.classList.add("cell");
                   cell.dataset.row = row;
                   cell.dataset.col = col;
                   cell.addEventListener("click", handleClick);
                  // board[row][col] === 1 ? cell.textContent = "X" : cell.textContent = "O";
                  if (board[row][col] === 1) {
                    cell.textContent = "X";
                    cell.style.color = "red";
                  } else if (board[row][col] === 2) {
                    cell.textContent = "O";
                    cell.style.color = "blue";
                  }
                   boardElement.appendChild(cell);
                }
            }
        }

        function handleClick(event) {
            const row = parseInt(event.target.dataset.row);
            const col = parseInt(event.target.dataset.col);

            if (board[row][col] === 0) {
              board[row][col] = currentPlayer;
              if(checkWin(row, col, currentPlayer)) {
                alert(`Player ${currentPlayer} wins!`);
                resetGame();
              }else{
                currentPlayer = 3-currentPlayer;
                drawBoard();
              }
            }
        }

        function checkWin(row, col, player) {
          return false;
        }


        function resetGame() {
          settingsElement.style.display = "block";
          board = new Array(rows).fill(0).map(() => new Array(cols).fill(0));
          currentPlayer = 1;
          drawBoard();
        }
        drawBoard();
    }
  
    document.getElementById("startButton").addEventListener("click", startGame);
  });
  