<template>
  <div class="omok-game-board-intersection" @click="placePiece()">
    <img v-if="pieces[position]" :src="getPieceUrl(pieces[position])" />
    <template v-else>{{ position }}</template>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "OmokGameBoardIntersection",
  props: {
    position: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapState(["pieces"]),
    ...mapGetters(["getPieceUrl"])
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
