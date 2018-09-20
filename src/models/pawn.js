export default class Pawn {

	constructor(options){
		// todo this is a default ship and it must be replace with settings,
		options = options || {};
		this.player_id = options.player_id;
		this.type = 'Destroyer'
		this.column = options.column;
		this.row = options.row;
		this.range = 4;
    }
}