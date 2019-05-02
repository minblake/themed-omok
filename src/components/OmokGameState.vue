<template>
  <div class="omok-game-state">
    <h3 class="omok-game-player-turn">{{ `${getCurrPlayer.name}'s Turn` }}</h3>
    <img
      class="omok-game-player-piece"
      :src="getPieceUrl(getCurrPlayer.piece)"
    />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "OmokGameState",
  data() {
    return {};
  },
  computed: {
    ...mapState(["playerOnePiece", "playerTwoPiece", "isCurrPlayerOne"]),
    ...mapGetters(["getPieceUrl", "getCurrPlayer"])
  }
};
</script>

<style>
.omok-game-state {
  grid-area: state;
}

.omok-game-player-turn {
  display: inline-block;
}

.omok-game-player-piece {
  margin-left: 10px;
}
</style>
