<template>
  <div class="omok-game">
    <omok-game-state />
    <omok-game-board />
    <omok-game-player :num="0" />
    <omok-game-player :num="1" />
  </div>
</template>

<script>
import OmokGameState from "./OmokGameState.vue";
import OmokGameBoard from "./OmokGameBoard.vue";
import OmokGamePlayer from "./OmokGamePlayer.vue";

export default {
  name: "OmokGame",
  components: {
    OmokGameState,
    OmokGameBoard,
    OmokGamePlayer
  }
};
</script>

<style>
.omok-game {
  display: grid;
  place-items: center;
  grid-template-areas: "state state state" "player-one board player-two";
}
</style>
