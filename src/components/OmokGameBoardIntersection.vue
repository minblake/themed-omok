<template>
  <div class="omok-game-board-intersection" @click="placePiece()">
    <img v-if="piece" :src="getPieceUrl(piece)" />
    <template v-else>{{ position }}</template>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "OmokGameBoardIntersection",
  props: {
    position: {
      type: Number,
      required: true
    },
    piece: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapGetters(["getPieceUrl"])
  },
  methods: {
    ...mapMutations(["updatePieces", "updateLastMove", "toggleCurrPlayer"]),
    placePiece() {
      // prevent from placing a piece on the same place
      if (!this.value) {
        this.updatePieces(this.position);
        this.updateLastMove(this.position);
        this.toggleCurrPlayer();
      }
    }
  }
};
</script>

<style>
.omok-game-board-intersection {
  border: 1px solid black;
  font-size: 10px;
}
</style>
