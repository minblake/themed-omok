<template>
  <div class="omok-game-state">
    <h3 class="title is-4 omok-game-player-turn">
      {{ `${currPlayer.name}'s Turn` }}
    </h3>
    <img class="omok-game-player-piece" :src="currPieceUrl(currPlayer.piece)" />
  </div>
</template>

<script>
export default {
  name: "OmokGameState",
  computed: {
    currPlayer() {
      return this.$store.getters["game/player/getCurrInfo"];
    },
    currPieceUrl() {
      return this.$store.getters["theme/getPiece"];
    }
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
