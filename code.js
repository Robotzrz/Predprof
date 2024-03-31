document.addEventListener("DOMContentLoaded", function() {
    createBoard();
});

function createBoard() {
    const widthInput = document.getElementById("board-width");
    const heightInput = document.getElementById("board-height");
    const quantityInput = document.getElementById("quantity-rooms");

    boardWidth = parseInt(widthInput.value);
    boardHeight = parseInt(heightInput.value);
    quantity_rooms = parseInt(quantityInput.value);

    const boardContainer = document.getElementById("board-container");
    boardContainer.style.setProperty('--board-width', boardWidth);
    boardContainer.style.setProperty('--board-height', boardHeight);
    // boardContainer.innerHTML = ""; // Очищаем поле перед созданием нового

    for (let i = 0; i < boardWidth * boardHeight; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.index = i;
        boardContainer.appendChild(cell);

        cell.addEventListener("click", function() {
            toggleShip(cell);
        });
    }
}

function toggleShip(cell) {
    const currentIndex = parseInt(cell.dataset.index);
    const cells = document.querySelectorAll(".cell");

    if (cell.classList.contains("ship")) {
        cell.classList.remove("ship");
    } else {
        // Проверка на близость кораблей
        if (!isAdjacentToShip(currentIndex, cells)) {
            cell.classList.add("ship");
        } else {
            alert("Нельзя ставить корабли близко друг к другу!");
        }
    }
}

function isAdjacentToShip(index, cells) {
    const adjacentIndexes = [
        index - boardWidth - 1, index - boardWidth, index - boardWidth + 1,
        index - 1, index + 1,
        index + boardWidth - 1, index + boardWidth, index + boardWidth + 1
    ];

    for (const adjIndex of adjacentIndexes) {
        if (cells[adjIndex] && cells[adjIndex].classList.contains("ship")) {
            return true;
        }
    }

    return false;
}