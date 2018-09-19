import Cell from '../models/cell';
import Defaults from '../defaults';

export default class Board {
	constructor(options = {}) {
		this.numberOfColumns = options.numberOfColumns || Defaults.BOARD_NUMBER_OF_COLUMNS;
		this.numberOfRows = options.numberOfRows || Defaults.BOARD_NUMBER_OF_ROWS;
		this.boardMap = options.boardMap || Defaults.BOARD_FIELDS_MAP;
		this.grid = this.createGrid();
		this.selectedCell = false;
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

		if (self.selectedCell) {
			self.selectedCell.isSelected = false;
			self.selectedCell = false;
		}
		if (newSelectedCell) {
			newSelectedCell.isSelected = true;
			self.selectedCell = newSelectedCell;}
	}
}