<template>
  <div class="content">
    <header-bar @newGame="newGame" />
    <div class="wrapper">
      <div class="subwrapper">
        <div class="grid">
          <template v-for="(row, rowIndex) in game.board.grid">
            <grid-cell
              v-for = "(cell, columnIndex) in row"
              :key = "columnIndex + '-' + rowIndex"
              :column = "columnIndex"
              :row = "rowIndex"
              :cell = "cell"
              :size = "getSize"
              @pawnSelected = "pawnSelected" />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderBar from './HeaderBar.vue';
  import Cell from './Cell.vue';
  import GameManager from '../managers/game_manager.js';
   
  export default {
    components: {
      headerBar : HeaderBar,
      gridCell : Cell
    },
    data() {
      GameManager.init();
      GameManager.addPawns();

      return {
        game : GameManager,
        selectedCell : Cell
      }
		},		
    computed: {
      getSize(){
        // todo correct
        return "0 0 " + 100 / this.game.board.numberOfColumns + "%";
      }
    },
    methods : {
      newGame() {
        // todo remove
        console.log('Home: new game button clicked');
      },
      pawnSelected(pawn, maxMoves) {
        this.selectCell(pawn.row, pawn.column);

      },
      selectCell(row, column) {
        const board = this.game.board;
        board.selectCellAt(row, column);
      }
    }
  }
</script>

<style lang="scss">
  .content{
    height: 100vh;

    .wrapper{
      display: flex;
      width: 100%;
      height: calc(100%);
      align-items: center;

      .subwrapper{
        display: flex;
        justify-content: center;

        width: 100%;
        .grid{
          display  : flex;
          flex-wrap: wrap;

          width: 100%;
          border: 2px solid black;
          @media (min-width: 1020px){
            max-width: 750px;
          }
        }
      }
    }
  }
</style>