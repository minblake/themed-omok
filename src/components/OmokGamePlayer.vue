<template>
  <div class="omok-game-player">
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

<style></style>
