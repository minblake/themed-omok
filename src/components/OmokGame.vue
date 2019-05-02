<template>
  <div class="omok-game">
    <h1 class="omok-game-title">Game</h1>
    <omok-game-state />
    <omok-game-board />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import OmokGameState from "./OmokGameState.vue";
import OmokGameBoard from "./OmokGameBoard.vue";

export default {
  name: "OmokGame",
  components: {
    OmokGameState,
    OmokGameBoard
  },
  computed: {
    ...mapState(["playerOnePiece", "playerTwoPiece", "isCurrPlayerOne"]),
    ...mapGetters(["getPieceUrl"])
  }
};
</script>

<style>
.omok-game {
  display: grid;
  grid-template: auto / 2fr 1fr;
  grid-template-areas:
    "title title"
    "state state"
    "game player";
}

.omok-game-title {
  grid-area: title;
}
</style>
