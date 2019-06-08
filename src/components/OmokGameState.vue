<template>
  <div class="omok-game-state">
    <div class="box">
      <omok-game-state-theme />
      <omok-game-state-msg />
      <button class="button is-small is-rounded is-danger" @click="resetGame">
        Play Again!
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import OmokGameStateTheme from "./OmokGameStateTheme.vue";
import OmokGameStateMsg from "./OmokGameStateMsg.vue";

export default {
  name: "OmokGameState",
  components: {
    OmokGameStateTheme,
    OmokGameStateMsg
  },
  methods: {
    ...mapActions(["resetGame"])
  }
};
</script>

<style>
.omok-game-state {
  grid-area: state;
  place-self: stretch;
}

.omok-game-state .box {
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem;
  border-radius: 0;
}

@media only screen and (min-width: 1121px) {
  .omok-game-state {
    place-self: center stretch;
  }

  .omok-game-state .box {
    border-radius: 6px;
  }
}
</style>
