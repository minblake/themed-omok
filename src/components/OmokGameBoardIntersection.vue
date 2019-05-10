<template>
  <div class="omok-game-board-intersection" @click="endTurn(position)">
    <img v-if="validPiece" :src="pieceUrl(piece)" />
    <template v-else>
      {{ `${position}` }}
    </template>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

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
  computed: {
    ...mapGetters("player", ["pieceUrl"]),
    validPiece() {
      return this.piece == 0 || this.piece == 1;
    }
  },
  methods: {
    ...mapActions(["endTurn"])
  }
};
</script>

<style>
.omok-game-board-intersection {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  font-size: 10px;
}
</style>
