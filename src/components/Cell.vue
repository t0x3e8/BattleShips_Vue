<template>
  <div 
    :style="{flex: size}"
    :class="getClasses"
    class="cell"
    @click="cellSelected">
    <template v-if="cell.pawn">
      <grid-pawn 
        :pawn="cell.pawn"
        @pawnSelected="pawnSelected" />
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
    "cell": {
      type : Cell,
      required : true
    }, 
    "size": {
      type : String,
      required : true
    }, 
    "column": {
      type : Number,
      required : true
    },
    "row": {
      type : Number,
      required : true
    }
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
      if (this.cell.isSelected) {
        classes.push("color-selection");
      }
      if (this.cell.isInRange) {
        classes.push("color-in-range");
      }
      return classes;
    }
  },
  methods: {
    pawnSelected() {
      if (this.cell.pawn) {
        this.$emit("pawnSelected", this.cell.pawn, this.cell.pawn.range);
      }
    },
    cellSelected() {
        this.$emit("cellSelected");
    }
  }
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
  &.color-selection { 
    background-color: red;
  }
  &.color-in-range { 
    border: 1px white solid;
  }
}
</style>