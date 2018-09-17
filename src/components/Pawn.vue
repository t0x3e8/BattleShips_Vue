<template>
  <div 
    class="pawn" 
    @click="pawnSelected">
    <img src="../assets/destroyer.png"> 
  </div>
</template>

<script>
import "../assets/destroyer.png";
import Pawn from "./Pawn.vue";

export default {
  props: {
    pawn: {
      type : Pawn,
      required: true
    }
  },
  methods: {
    pawnSelected() {
      this.$emit("pawnSelected");
    }
  }
};
</script>

<style lang="scss" scoped>
.pawn {
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  border: 1px black solid;
  width: 75%;
  height: 75%;
  background-color: white;

  img {
    width: 120%;
    height: 120%;
  }
}
</style>