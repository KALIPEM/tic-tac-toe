// Select all the cells on the board
const cells = document.querySelectorAll('.cell');

// Define the game variables
let currentPlayer = 'X';
let gameStatus = ['', '', '', '', '', '', '', '', ''];
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Add event listeners to the cells
cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        // If the cell is already marked, do nothing
        if (gameStatus[index] !== '') return;

        // Mark the cell with the current player's mark
        cell.textContent = currentPlayer;
        gameStatus[index] = currentPlayer;

        // Check if the current player has won
        if (checkWin(currentPlayer)) {
            alert(`${currentPlayer} wins!`);
            resetGame();
            return;
        }

        // Check if the game is a tie
        if (!gameStatus.includes('')) {
            alert('Tie game!');
            resetGame();
            return;
        }

        // Switch to the next player
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    });
});

// Check if the current player has won
function checkWin(player) {
    return winningCombos.some((combo) => {
        return combo.every((index) => {
            return gameStatus[index] === player;
        });
    });
}

// Reset the game to its initial state
function resetGame() {
    gameStatus = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    cells.forEach((cell) => {
        cell.textContent = '';
    });
}
