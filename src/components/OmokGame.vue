<template>
  <div class="omok-game">
    <h1 class="omok-game-title">Game</h1>
    <div class="omok-game-state">
      <template v-if="isCurrPlayerOne">
        <h3 class="omok-game-player-turn">Player 1's Turn</h3>
        <img
          class="omok-game-player-piece"
          :src="getPieceUrl(playerOnePiece)"
        />
      </template>
      <template v-else>
        <h3 class="omok-game-player-turn">Player 2's Turn</h3>
        <img
          class="omok-game-player-piece"
          :src="getPieceUrl(playerTwoPiece)"
        />
      </template>
    </div>
    <omok-game-board />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import OmokGameBoard from "./OmokGameBoard.vue";
export default {
  name: "OmokGame",
  components: {
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
