<template>
  <div class="omok-game-state">
    <h3 class="title is-4 omok-game-player-turn">
      <template v-if="hasWinner">
        {{ `${currPlayer.name} Wins!` }}
      </template>
      <template v-else>
        {{ `${currPlayer.name}'s Turn` }}
      </template>
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
    },
    hasWinner() {
      return this.$store.getters["game/getHasWinner"];
    }
  }
};
</script>

<style>
.omok-game-state {
  grid-area: state;
  z-index: 3;
}

.omok-game-player-turn {
  display: inline-block;
}

.omok-game-player-piece {
  margin-left: 10px;
}
</style>
