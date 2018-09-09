import Cell from '../models/cell';
import Defaults from '../defaults';

export default class Board {
    constructor(options = {}) {
        this.numberOfColumns = options.numberOfColumns || Defaults.BOARD_NUMBER_OF_COLUMNS;
		this.numberOfRows = options.numberOfRows || Defaults.BOARD_NUMBER_OF_ROWS;
		this.boardMap = options.boardMap || Defaults.BOARD_FIELDS_MAP;
		this.grid = this.createGrid();
	}

	createGrid(){
		const grid = [];

		for(let i = 0; i < this.numberOfRows; i++){
			const row = [];

			for(let j = 0; j < this.numberOfColumns; j++){
				row.push(new Cell({type : this.boardMap[i][j]}));
			}
			grid.push(row);
		}

		return grid;
	}

	setPawn(pawn){
		this.getCellAt(pawn.x, pawn.y).pawn = pawn;
	}	

	getCellAt(x, y){
		return this.grid[y][x];
	}
}