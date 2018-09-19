export default class Pawn {

	constructor(options){
		options = options || {};
		this.player_id = options.player_id;
		this.type = 'Destroyer'
		this.column = options.column;
		this.row = options.row;
		this.moves = 4;
    }
}