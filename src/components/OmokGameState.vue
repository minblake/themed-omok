<template>
  <div class="omok-game-state">
    <h3 class="omok-game-player-turn">
      {{ `${currInfo.name}'s Turn` }}
    </h3>
    <img class="omok-game-player-piece" :src="pieceUrl(currInfo.piece)" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "OmokGameState",
  computed: {
    ...mapGetters("player", ["pieceUrl", "currInfo"])
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
