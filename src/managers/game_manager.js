import Board from '../models/board'
import Pawn from '../models/pawn'
import Player from '../models/player'

export default {
  init(options = {}) {
    this.board = new Board(options);
    this.player_one = new Player({id: 'Player1'});
    this.player_two = new Player({id: 'Player2'});
  },

	addPawns(){
		const self = this;

		for(let c = 0; c < this.board.numberOfColumns; c++) {
			this.player_one.addPawn(new Pawn({x: c, y: 0}));
			this.player_two.addPawn(new Pawn({x: c, y: this.board.numberOfRows - 1}));
		}

		[this.player_one, this.player_two].forEach((player) => {
			player.pawns.forEach((pawn) => {
				self.board.setPawn(pawn);
			});
		});
	},
}