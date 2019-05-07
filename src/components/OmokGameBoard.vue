<template>
  <div
    class="omok-game-board"
    :style="{
      gridTemplate:
        `repeat(${gridSize}, ${intersectionSize}) /` +
        `repeat(${gridSize}, ${intersectionSize})`
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
import { mapState, mapMutations } from "vuex";
import OmokGameBoardIntersection from "./OmokGameBoardIntersection.vue";

export default {
  name: "OmokGameBoard",
  components: {
    OmokGameBoardIntersection
  },
  props: {},
  data() {
    return {
      gridSize: 15,
      intersectionSize: "30px",
      board: Array(225).fill(0)
    };
  },
  computed: {
    ...mapState(["lastMove", "isCurrPlayerOne"]),
    boardSize() {
      return this.board.length;
    }
  },
  watch: {
    lastMove() {
      this.checkWin();
    }
  },
  methods: {
    ...mapMutations(["updateWinner", "toggleCurrPlayer"]),
    checkWin() {
      const HORIZONTAL = 1;
      const VERTICAL = this.gridSize;
      const LEFT_DIAGONAL = this.gridSize + 1;
      const RIGHT_DIAGONAL = this.gridSize - 1;

      if (
        this.checkDirection(HORIZONTAL) ||
        this.checkDirection(VERTICAL) ||
        this.checkDirection(LEFT_DIAGONAL) ||
        this.checkDirection(RIGHT_DIAGONAL)
      )
        this.isCurrPlayerOne ? this.updateWinner(1) : this.updateWinner(2);
    },
    checkDirection(dir) {
      let i;
      const playerPiece = this.pieces[this.lastMove];
      const lowPos = this.lastMove - dir;
      const highPos = this.lastMove + dir;

      let numConsecPieces = 0;

      i = lowPos;
      while (i >= 0 && numConsecPieces < 4 && playerPiece === this.pieces[i]) {
        numConsecPieces++;
        i -= dir;
      }

      i = highPos;
      while (
        i < this.numIntersections &&
        numConsecPieces < 4 &&
        playerPiece === this.pieces[i]
      ) {
        numConsecPieces++;
        i += dir;
      }

      return numConsecPieces >= 4;
    }
  }
};
</script>

<style>
.omok-game-board {
  display: grid;
}
</style>
