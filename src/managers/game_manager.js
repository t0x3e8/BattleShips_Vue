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

		const number_of_rows = this.board.size / 2 - 1;
		for(let y = 0; y < number_of_rows; y++){
			for(let x = 1 - y%2; x < this.board.size; x += 2){
				this.player_one.addPawn(new Pawn({x: x, y: y}));
				this.player_two.addPawn(new Pawn({x: this.board.size - x - 1, y: this.board.size - y - 1}));
			}
		}

		[this.player_one, this.player_two].forEach((player) => {
			player.pawns.forEach((pawn) => {
				self.board.setPawn(pawn);
			});
		});
	},
}