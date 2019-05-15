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
  computed: {
    playerName: {
      get() {
        return this.$store.getters["game/player/getName"](this.num);
      },
      set(newName) {
        this.$store.dispatch("game/player/setName", {
          i: this.num,
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
