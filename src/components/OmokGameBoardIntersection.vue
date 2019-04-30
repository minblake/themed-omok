<template>
  <div class="omok-game-board-intersection">{{ position }}</div>
</template>

<script>
export default {
  name: "OmokGameBoardIntersection",
  props: {
    position: {
      type: Number,
      required: true
    }
  }
};
</script>

<style>
.omok-game-board-intersection {
  border: 1px solid black;
  font-size: 10px;
}
</style>
