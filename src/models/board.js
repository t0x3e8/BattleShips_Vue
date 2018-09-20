import Cell from '../models/cell';
import Defaults from '../defaults';

export default class Board {
	constructor(options = {}) {
		this.numberOfColumns = options.numberOfColumns || Defaults.BOARD_NUMBER_OF_COLUMNS;
		this.numberOfRows = options.numberOfRows || Defaults.BOARD_NUMBER_OF_ROWS;
		this.boardMap = options.boardMap || Defaults.BOARD_FIELDS_MAP;
		this.grid = this.createGrid();
		this.selectedCell = false;
		this.cellsInRange = [];
	}

	createGrid() {
		const grid = [];

		for (let i = 0; i < this.numberOfRows; i++) {
			const row = [];

			for (let j = 0; j < this.numberOfColumns; j++) {
				const cellType = this.boardMap[i][j];
				row.push(new Cell({ type: cellType }));
			}
			grid.push(row);
		}

		return grid;
	}

	setPawn(pawn) {
		this.getCellAt(pawn.row, pawn.column).pawn = pawn;
	}

	getCellAt(row, column) {
		return this.grid[row][column];
	}

	selectCellAt(row, column) {
		const self = this;
		const newSelectedCell = this.grid[row][column];

		self.deselectCells();

		if (self.selectedCell) {
			self.selectedCell.isSelected = false;
			self.selectedCell = false;
		}
		if (newSelectedCell) {
			newSelectedCell.isSelected = true;
			self.selectedCell = newSelectedCell;

			self.selectCells(self.selectedCell.pawn);
		}
	}

	deselectCells() {
		const self = this;
		
		self.cellsInRange.forEach(cell => {
			cell.isInRange = false;
		});
		self.cellsInRange = [];

	}

	selectCells(pawn) {
		const self = this;

		self.cellsInRange = self.getPawnRange(pawn);
		self.cellsInRange.forEach(cell => {
			cell.isInRange = true;
		});
	}

	getPawnRange(pawn) {
    const pawnRange = pawn.range;

		const cellsInRange = [];
		// let pawnInField = null;
		const colMin = pawn.column - pawnRange;
    let col = colMin;
    const colMax = pawn.column + pawnRange;
    let row = pawn.row - pawnRange;
    const rowMax = pawn.row + pawnRange;
    const self = this;

    // each field within the square range is tested, if: 
    // - the field has no pawns in it, mark the field as in range,
    // - the field has a pawn, but the pawn is opponent's pawn, mark the field as in range, 
    for (row; row <= rowMax; row++) {
        if (typeof self.grid[row] !== 'undefined') {
            for (col; col <= colMax; col++) {
                if (typeof self.grid[row][col] !== 'undefined') {
										// pawnInField = self.grid[row][col].pawn;
										// todo replace with players
                    // if (!pawnInField || pawnInField.getPlayer() &&
                    //     pawnInField.getPlayer().getPlayerId() !== pawn.getPlayer().getPlayerId()) {
										cellsInRange.push(self.grid[row][col]);
                    //}
                }
            }
            col = colMin;
        }
    }

    return cellsInRange;
	}
}