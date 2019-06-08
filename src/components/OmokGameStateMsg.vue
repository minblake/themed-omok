<template>
  <div class="omok-game-state-msg">
    <p v-if="hasWinner">
      {{ `${currPlayer.name} Wins!` }}
    </p>
    <p v-else>
      {{ `${currPlayer.name}'s Turn` }}
    </p>
    <img class="omok-game-state-msg-piece" :src="currPlayer.pieceUrl" />
  </div>
</template>

<script>
export default {
  name: "OmokGameStateMsg",
  computed: {
    currPlayer() {
      return this.$store.getters["getCurrPlayerInfo"];
    },
    hasWinner() {
      return this.$store.getters["getHasWinner"];
    }
  }
};
</script>

<style>
.omok-game-state-msg {
  display: flex;
  justify-content: space-around;
}

.omok-game-state-msg-piece {
  margin-left: 10px;
}
</style>
