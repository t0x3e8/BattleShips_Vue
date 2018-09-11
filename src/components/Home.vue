<template>
	<div class="content">
		<header-bar @newGame="newGame" />
		<div class="wrapper">
			<div class="subwrapper">
				<div class="grid">
					<template v-for="(row, y) in game.board.grid">
						<grid-cell
							v-for="(cell, x) in row"
							:key="x+'-'+y"
							:x="x"
							:y="y"
							:cell="cell"
							:size="getSize" />
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
        game : GameManager
      }
    },
    methods : {
      newGame() {
        console.log('Home: new game button clicked');
      }
		},
		computed: {
			getSize(){
				return "0 0 " + 100 / this.game.board.numberOfColumns + "%";
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