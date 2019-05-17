<template>
  <div class="omok-game-player" :class="[num === 0 ? 'one' : 'two']">
    <div class="card">
      <header class="card-header">
        <div class="card-header-title control">
          <input
            v-model="playerName"
            type="text"
            class="input has-text-centered"
          />
        </div>
      </header>
      <div class="card-content">
        <figure class="player-piece image is-32x32">
          <img :src="pieces[player.piece]" />
        </figure>
        <div class="buttons has-addons">
          <button
            v-for="(piece, i) in pieces"
            :key="i"
            class="button"
            :class="{
              'is-light': piecesInUse.includes(i)
            }"
            :disabled="piecesInUse.includes(i)"
            @click="
              changePiece({
                player: num,
                oldPiece: player.piece,
                newPiece: i
              })
            "
          >
            <img :src="piece" />
          </button>
        </div>
      </div>
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
      return this.$store.getters["game/player/getPlayer"](this.num);
    },
    playerName: {
      get() {
        return this.player.name;
      },
      set(newName) {
        this.setName({ i: this.num, name: newName });
      }
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

.player-piece {
  margin: 40px auto;
}
</style>
