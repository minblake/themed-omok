<template>
  <section
    class="omok-game"
    :style="{
      backgroundImage: `url(${themeBackground})`
    }"
  >
    <omok-game-state />
    <omok-game-board />
    <omok-game-player :num="0" />
    <omok-game-player :num="1" />
  </section>
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
  },
  computed: {
    themeBackground() {
      return this.$store.getters["theme/getCurrBg"];
    }
  }
};
</script>

<style>
.omok-game {
  display: grid;
  place-items: center;
  grid-template-areas: "state state" "board board" "player-one player-two";
  height: 100vh;
  background: no-repeat bottom/cover;
}

@media only screen and (min-width: 768px) and (max-width: 1120px) {
  .omok-game {
    grid-template-areas: "state state" "board player-one" "board player-two";
  }
}

@media only screen and (min-width: 1121px) {
  .omok-game {
    grid-template-areas: ". state ." "player-one board player-two";
  }
}
</style>
