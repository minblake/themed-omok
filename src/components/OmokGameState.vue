<template>
  <div class="omok-game-state">
    <div class="box">
      <omok-game-state-theme />
      <omok-game-state-msg />
      <button class="button is-small is-rounded is-danger omok-game-state-info">
        Play Again!
      </button>
    </div>
  </div>
</template>

<script>
import OmokGameStateTheme from "./OmokGameStateTheme.vue";
import OmokGameStateMsg from "./OmokGameStateMsg.vue";

export default {
  name: "OmokGameState",
  components: {
    OmokGameStateTheme,
    OmokGameStateMsg
  }
};
</script>

<style>
.omok-game-state {
  grid-area: state;
  justify-self: stretch;
  z-index: 3;
}

.omok-game-state .box {
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem;
}
</style>
