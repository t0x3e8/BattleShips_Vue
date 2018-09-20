export default class Cell {
    constructor(options = {}) {
        this.type = options.type || 0;
        this.isSelected = false;
        this.isInRange = false;
    }
}