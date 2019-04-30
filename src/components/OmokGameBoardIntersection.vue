<template>
  <button class="omok-game-board-intersection" @click="placePiece(position)">
    <template v-if="value">{{ value }}</template>
    <template v-else>{{ position }}</template>
  </button>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "OmokGameBoardIntersection",
  props: {
    position: {
      type: Number,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  },
  methods: {
    ...mapMutations(["placePiece"])
  }
};
</script>

<style>
.omok-game-board-intersection {
  border: 1px solid black;
  font-size: 10px;
}
</style>
