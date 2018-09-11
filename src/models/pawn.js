export default class Pawn {

	constructor(options){
		options = options || {};
		this.player_id = options.player_id;
		this.type = 'Destroyer'
		this.x = options.x;
		this.y = options.y;
    }
}