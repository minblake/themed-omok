<template>
  <div
    ref="boardInt"
    class="omok-game-board-intersection"
    @click="!hasWinner && endTurn(position)"
    @mouseover="!hasWinner && (isHover = true)"
    @mouseleave="!hasWinner && (isHover = false)"
  >
    <img v-if="piece >= 0" :src="pieceUrl(piece)" />
    <img
      v-if="isHover && piece < 0"
      :style="{ opacity: 0.5 }"
      :src="currPieceUrl"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "OmokGameBoardIntersection",
  props: {
    position: {
      type: Number,
      required: true
    },
    piece: {
      type: Number,
      default: -1
    }
  },
  data() {
    return {
      isHover: false
    };
  },
  computed: {
    pieceUrl() {
      return this.$store.getters["theme/getPiece"];
    },
    currPieceUrl() {
      return this.$store.getters["getCurrPlayerInfo"].pieceUrl;
    },
    hasWinner() {
      return this.$store.getters["getHasWinner"];
    }
  },
  methods: {
    ...mapActions(["endTurn"]),
    colorBg() {
      this.$refs.boardInt.classList.add("win");
    },
    removeBg() {
      this.$refs.boardInt.classList.remove("win");
    }
  }
};
</script>

<style>
.omok-game-board-intersection {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  position: relative;
  cursor: pointer;
}

.omok-game-board-intersection:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: -50%;
  border-bottom: 0.8px solid #a8acaa;
  z-index: -1;
}

.omok-game-board-intersection:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  left: -50%;
  border-right: 0.8px solid #a8acaa;
  z-index: -1;
}

.win {
  background-color: red;
}
</style>
