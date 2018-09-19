import Board from '../models/board'
import Pawn from '../models/pawn'
import Player from '../models/player'

export default {
	init(options = {}) {
		this.board = new Board(options);
		this.player_one = new Player({ id: 'Player1' });
		this.player_two = new Player({ id: 'Player2' });
	},

	addPawns() {
		const self = this;

		for (let col = 0; col < this.board.numberOfColumns; col++) {
			this.player_one.addPawn(new Pawn({ row: 0, column: col }));
			this.player_two.addPawn(new Pawn({ row: this.board.numberOfRows - 1, column: col }));
		}

		[this.player_one, this.player_two].forEach((player) => {
			player.pawns.forEach((pawn) => {
				self.board.setPawn(pawn);
			});
		});
	},
}