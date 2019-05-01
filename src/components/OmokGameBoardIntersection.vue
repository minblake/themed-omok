<template>
  <div class="omok-game-board-intersection" @click="placePiece()">
    <img v-if="value" :src="getPieceUrl(value)" />
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
    value: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters(["getPieceUrl"])
  },
  methods: {
    ...mapMutations(["updatePieces", "updateLastMove", "updateCurrPlayer"]),
    placePiece() {
      this.updatePieces(this.position);
      this.updateLastMove(this.position);
      this.updateCurrPlayer();
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
