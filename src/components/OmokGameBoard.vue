<template>
  <div
    class="omok-game-board"
    :style="{
      gridTemplate:
        `repeat(${boardDim.grid}, ${boardDim.intersection}px) /` +
        `repeat(${boardDim.grid}, ${boardDim.intersection}px)`
    }"
  >
    <svg
      id="win-svg"
      :style="[winner < 0 ? { 'z-index': 0 } : { 'z-index': 2 }]"
    >
      <line id="win-line" ref="line" />
    </svg>
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
    ...mapGetters("game/board", {
      board: "getBoard",
      boardDim: "getDim",
      boardSize: "getBoardSize"
    }),
    ...mapGetters("game", {
      winningMoves: "getWinningMoves",
      winner: "getWinner"
    })
  },
  watch: {
    winningMoves() {
      this.drawLine();
    }
  },
  methods: {
    drawLine() {
      const boardInts = this.$refs.boardInts;
      const line = this.$refs.line;
      const min = Math.min(...this.winningMoves);
      const max = Math.max(...this.winningMoves);
      const p1 = boardInts[min].getXY();
      const p2 = boardInts[max].getXY();

      line.setAttribute("x1", p1.x);
      line.setAttribute("y1", p1.y);
      line.setAttribute("x2", p2.x);
      line.setAttribute("y2", p2.y);
    }
  }
};
</script>

<style>
.omok-game-board {
  display: grid;
  grid-area: board;
  background-color: #f6faf8;
  opacity: 0.9;
  padding: 10px;
  border-radius: 10px;
}

#win-svg {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

#win-line {
  stroke-width: 5px;
  stroke: red;
}
</style>
