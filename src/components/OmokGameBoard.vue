<template>
  <div
    class="omok-game-board"
    :style="{
      gridTemplate:
        `repeat(${dim.grid}, ${dim.intersection}px) /` +
        `repeat(${dim.grid}, ${dim.intersection}px)`
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
    ...mapGetters("board", ["board", "dim", "boardSize"])
  }
};
</script>

<style>
.omok-game-board {
  display: grid;
  grid-area: board;
}
</style>
