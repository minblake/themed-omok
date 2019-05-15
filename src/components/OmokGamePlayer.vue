<template>
  <div class="omok-game-player" :class="[num === 0 ? 'one' : 'two']">
    <input v-model="playerName" type="text" />
    <div class="buttons has-addons">
      <button
        v-for="(piece, i) in pieces"
        :key="i"
        class="button"
        :class="{
          'is-success': piecesInUse[num] == i,
          'is-danger': piecesInUse[(num + 1) % 2] == i
        }"
        :disabled="piecesInUse[(num + 1) % 2] == i"
      >
        <img :src="piece" />
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "OmokGamePlayer",
  props: {
    num: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapGetters("game/player", {
      player: "getInfo",
      piecesInUse: "getPiecesInUse"
    }),
    ...mapGetters("theme", {
      pieces: "getCurrPieces"
    }),
    playerName: {
      get() {
        return this.player(this.num).name;
      },
      set(newName) {
        this.setName({ i: this.num, name: newName });
      }
    },
    playerPieceUrl() {
      return this.pieces[this.player(this.num).piece];
    }
  },
  methods: {
    ...mapActions("game/player", ["setName", "setPiece"])
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
