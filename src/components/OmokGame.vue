<template>
  <div class="omok-game">
    <h1 class="omok-game-title">Game</h1>
    <h2 class="omok-game-state">State</h2>
    <omok-game-board />
  </div>
</template>

<script>
import OmokGameBoard from "./OmokGameBoard.vue";
export default {
  name: "OmokGame",
  components: {
    OmokGameBoard
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
</style>
