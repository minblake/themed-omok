<template>
  <div
    class="omok-game-player"
    :style="[
      num === 0 ? { gridArea: 'player-one' } : { gridArea: 'player-two' }
    ]"
  >
    <div class="card">
      <header class="card-header">
        <div class="card-header-title control">
          <input
            v-model="playerName"
            type="text"
            class="input has-text-centered"
          />
          <img :src="pieces[player.piece]" class="player-piece" />
        </div>
      </header>
      <div class="card-content">
        <div class="buttons is-centered">
          <button
            v-for="(piece, i) in pieces"
            :key="i"
            class="button"
            :class="{
              'is-success': i == piecesInUse[num],
              'is-light': i == piecesInUse[(num + 1) % 2]
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
      return this.$store.getters["player/getPiecesInUse"];
    },
    player() {
      return this.$store.getters["player/getPlayer"](this.num);
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
    ...mapActions("player", ["setName", "setPiece"]),
    ...mapActions(["changePiece"])
  }
};
</script>

<style>
.omok-game-player {
  align-self: stretch;
}

.omok-game-player .card .card-content {
  padding: 0.3rem;
}

.player-piece {
  margin-left: 10px;
}

@media only screen and (min-width: 768px) and (max-width: 1120px) {
  .omok-game-player .card {
    border-radius: 6px;
  }
}

@media only screen and (min-width: 1025px) {
  .omok-game-player {
    align-self: start;
  }

  .omok-game-player .card {
    border-radius: 6px;
  }
}
</style>
