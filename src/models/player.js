export default class Player {

	constructor(options = {}){
		options            = options || {};
		this.id            = options.id;
		this.pawns        = [];
		this.selected_cell = false;
	}

	addPawn(pawn){
		pawn.player_id = this.id;
		this.pawns.push(pawn);
	}
}