<template>
  <div class="omok-game">
    <omok-game-state />
    <omok-game-board />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import OmokGameState from "./OmokGameState.vue";
import OmokGameBoard from "./OmokGameBoard.vue";

export default {
  name: "OmokGame",
  components: {
    OmokGameBoard,
    OmokGameState
  },
  computed: {
    ...mapGetters("player", ["currInfo"])
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
