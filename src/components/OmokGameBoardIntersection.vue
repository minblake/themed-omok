<template>
  <div class="omok-game-board-intersection" @click="endTurn(position)">
    <img v-if="piece >= 0" :src="pieceUrl(piece)" />
    <template v-else>
      {{ `${position}` }}
    </template>
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
  computed: {
    pieceUrl() {
      return this.$store.getters["theme/getPiece"];
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
  border: 1px solid black;
  font-size: 10px;
}
</style>
