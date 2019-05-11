<template>
  <div class="omok-game-player" :class="[num === 0 ? 'one' : 'two']">
    <input v-model="playerName" type="text" />
  </div>
</template>

<script>
export default {
  name: "OmokGamePlayer",
  props: {
    num: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      playerOneStyle: { gridArea: "player-one" },
      playerTwoStyle: { gridArea: "player-two" }
    };
  },
  computed: {
    playerName: {
      get() {
        return this.$store.getters["player/playerName"](this.num);
      },
      set(newName) {
        this.$store.dispatch("player/updatePlayerName", {
          num: this.num,
          name: newName
        });
      }
    }
  }
};
</script>

<style>
.one {
  grid-area: player-one;
}

.two {
  grid-area: player-two;
}
</style>
