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
      ref="boardInts"
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
    ...mapGetters("board", {
      board: "getBoard",
      boardDim: "getDim",
      boardSize: "getBoardSize"
    }),
    ...mapGetters({
      winningMoves: "getWinningMoves",
      hasWinner: "getHasWinner"
    })
  },
  watch: {
    hasWinner() {
      this.colorInts();
    }
  },
  methods: {
    colorInts() {
      const boardInts = this.$refs.boardInts;
      if (this.hasWinner) {
        this.winningMoves.forEach(i => {
          boardInts[i].colorBg();
        });
      } else {
        boardInts.forEach(i => {
          i.removeBg();
        });
      }
    }
  }
};
</script>

<style>
.omok-game-board {
  display: grid;
  grid-area: board;
  align-self: start;
  background-color: #f6faf8;
  opacity: 0.9;
  padding: 10px;
  border-radius: 10px;
}
</style>
