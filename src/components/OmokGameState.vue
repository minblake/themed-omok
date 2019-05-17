<template>
  <div class="omok-game-state">
    <h3 class="title is-4 omok-game-player-turn">
      {{ `${currPlayer.name}'s Turn` }}
    </h3>
    <img class="omok-game-player-piece" :src="currPlayer.pieceUrl" />
  </div>
</template>

<script>
export default {
  name: "OmokGameState",
  computed: {
    currPlayer() {
      return this.$store.getters["game/getCurrPlayerInfo"];
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
