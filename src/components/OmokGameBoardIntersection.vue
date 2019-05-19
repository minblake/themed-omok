<template>
  <div
    class="omok-game-board-intersection"
    @click="endTurn(position)"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
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
      isHover: false,
      message: "hoverme"
    };
  },
  computed: {
    pieceUrl() {
      return this.$store.getters["theme/getPiece"];
    },
    currPieceUrl() {
      return this.$store.getters["game/getCurrPlayerInfo"].pieceUrl;
    }
  },
  methods: {
    ...mapActions("game", ["endTurn"])
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
  z-index: 1;
  cursor: pointer;
}

.omok-game-board-intersection:before {
  content: "";
  position: absolute;
  background-color: #a8acaa;
  width: 1px;
  height: 100%;
  z-index: -1;
}

.omok-game-board-intersection:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: #a8acaa;
  z-index: -1;
}
</style>
