<template>
  <div class="omok-game">
    <div class="omok-game-title">
      <h1>Game</h1>
      <button type="button" @click="resetState()">Reset</button>
    </div>
    <omok-game-state />
    <omok-game-board />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import OmokGameState from "./OmokGameState.vue";
import OmokGameBoard from "./OmokGameBoard.vue";

export default {
  name: "OmokGame",
  components: {
    OmokGameState,
    OmokGameBoard
  },
  methods: {
    ...mapMutations(["resetState"])
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
