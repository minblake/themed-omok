<template>
  <div class="omok-game-player" :class="[num === 0 ? 'one' : 'two']">
    <input v-model="playerName" type="text" />
    <div class="buttons has-addons">
      <button
        v-for="(piece, i) in pieces"
        :key="i"
        class="button"
        :class="{
          'is-success': playerPiece == i,
          'is-danger': otherPlayerPiece == i
        }"
        :disabled="playerPiece == i || otherPlayerPiece == i"
        @click="
          changePiece({ player: num, oldPiece: playerPiece, newPiece: i })
        "
      >
        <img :src="piece" />
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "OmokGamePlayer",
  props: {
    num: {
      type: Number,
      required: true
    }
  },
  computed: {
    pieces() {
      return this.$store.getters["theme/getCurrPieces"];
    },
    piecesInUse() {
      return this.$store.getters["game/player/getPiecesInUse"];
    },
    player() {
      return this.$store.getters["game/player/getInfo"](this.num);
    },
    playerPiece() {
      return this.player.piece;
    },
    otherPlayerPiece() {
      return this.piecesInUse[(this.num + 1) % 2];
    },
    playerName: {
      get() {
        return this.player.name;
      },
      set(newName) {
        this.setName({ i: this.num, name: newName });
      }
    },
    playerPieceUrl() {
      return this.pieces[this.player.piece];
    }
  },
  methods: {
    ...mapActions("game/player", ["setName", "setPiece"]),
    ...mapActions("game", ["changePiece"])
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
