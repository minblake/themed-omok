<template>
  <div class="omok-game-board-intersection" @click="placePiece()">
    <img v-if="pieces[position]" :src="omokPieceUrl(position)" />
    <template v-else>{{ position }}</template>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "OmokGameBoardIntersection",
  computed: {
    ...mapState(["pieces"]),
    ...mapGetters(["omokPieceUrl"])
  },
  methods: {
    ...mapMutations(["updatePieces", "updateCurrPlayer"]),
    placePiece() {
      this.updatePieces(this.position);
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
