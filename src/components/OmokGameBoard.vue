<template>
  <div
    class="omok-game-board"
    :style="{
      gridTemplate:
        `repeat(${gridSize}, ${intersectionSize}) /` +
        `repeat(${gridSize}, ${intersectionSize})`
    }"
  >
    <omok-game-board-intersection
      v-for="(n, i) in numIntersections"
      :key="n"
      :position="i"
      :value="pieces[i]"
    />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import OmokGameBoardIntersection from "./OmokGameBoardIntersection.vue";

export default {
  name: "OmokGameBoard",
  components: {
    OmokGameBoardIntersection
  },
  computed: {
    ...mapState(["gridSize", "intersectionSize", "pieces"]),
    ...mapGetters(["numIntersections"])
  }
};
</script>

<style>
.omok-game-board {
  display: grid;
}
</style>
