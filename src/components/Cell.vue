<template>
  <div 
    :style="{flex: size}"
    :class="getClasses"
    class="cell">
    <template v-if="cell.pawn">
      <grid-pawn :pawn="cell.pawn"/>
    </template>
  </div>   
</template>

<script>
import Pawn from "./Pawn.vue";
import Cell from '../models/cell';

export default {
  components: {
    gridPawn: Pawn
  },
  props: {
    "cell": Cell, 
    "size": String, 
    "x": Number,
    "y": Number, 
    "moves": Number
  },
  computed: {
    getClasses() {
      const classes = [];

      if (this.cell.type === 0) {
        classes.push("color-sea");
      }
      if (this.cell.type === 1 || this.cell.type === 2) {
        classes.push("color-land");
      }
      if (this.cell.type === 3 || this.cell.type === 4) {
        classes.push("color-land-darken");
      }
      if (this.cell.type === 5) {
        classes.push("color-island");
      }
      return classes;
    }
  },
  methods: {}
};
</script>

<style lang="scss">
.cell {
  display: flex;
  justify-content: center;
  align-items: stretch;
  border: 1px #222222 solid;

  &:before {
    content: "";
    display: table;
    padding-top: 100%;
  }
  &.color-land {
    background-color: #03b363;
  }
  &.color-land-darken {
    background-color: darken($color: (#03b363), $amount: 10);
  }
  &.color-sea {
    background-color: #006694;
  }
  &.color-island {
    background-color: #ede064;
  }
}
</style>