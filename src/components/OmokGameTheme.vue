<template>
  <div class="omok-game-theme select">
    <select v-model="selected">
      <option v-for="(theme, i) in themes" :key="theme.name" :value="i">{{
        theme.name
      }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "OmokGameTheme",
  computed: {
    themes() {
      return this.$store.getters["theme/getThemes"];
    },
    selected: {
      get() {
        return this.$store.getters["theme/getCurr"];
      },
      set(value) {
        this.$store.dispatch("theme/setCurrTheme", value);
      }
    }
  }
};
</script>

<style>
.omok-game-theme {
  grid-area: theme;
  z-index: 3;
}
</style>
