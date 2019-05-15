<template>
  <div
    class="omok-game-board"
    :style="{
      gridTemplate:
        `repeat(${boardDim.grid}, ${boardDim.intersection}px) /` +
        `repeat(${boardDim.grid}, ${boardDim.intersection}px)`
    }"
  >
    <omok-game-board-intersection
      v-for="(n, i) in boardSize"
      :key="n"
      :position="i"
      :piece="board[i]"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import OmokGameBoardIntersection from "./OmokGameBoardIntersection.vue";

export default {
  name: "OmokGameBoard",
  components: {
    OmokGameBoardIntersection
  },
  computed: {
    ...mapGetters("game/board", {
      board: "getBoard",
      boardDim: "getDim",
      boardSize: "getBoardSize"
    })
  }
};
</script>

<style>
.omok-game-board {
  display: grid;
  grid-area: board;
}
</style>
