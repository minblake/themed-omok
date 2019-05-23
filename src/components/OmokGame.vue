<template>
  <section
    class="section omok-game"
    :style="{
      backgroundImage: `url(${themeBackground})`
    }"
  >
    <omok-game-theme />
    <omok-game-state />
    <omok-game-board />
    <omok-game-player :num="0" />
    <omok-game-player :num="1" />
  </section>
</template>

<script>
import OmokGameTheme from "./OmokGameTheme.vue";
import OmokGameState from "./OmokGameState.vue";
import OmokGameBoard from "./OmokGameBoard.vue";
import OmokGamePlayer from "./OmokGamePlayer.vue";

export default {
  name: "OmokGame",
  components: {
    OmokGameTheme,
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
  grid-template-areas: "theme theme theme" "state state state" "player-one board player-two";
  height: 100vh;
  background: no-repeat center/cover;
}
</style>
