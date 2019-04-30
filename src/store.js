import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gridSize: 15,
    intersectionSize: "30px",
    pieces: Array(225).fill(false),
    theme: "maplestory",
    playerOnePiece: "slime.png",
    playerTwoPiece: "mushroom.png",
    isCurrPlayerOne: true
  },
  getters: {
    numIntersections: state => {
      return state.gridSize * state.gridSize;
    },
    getPieceUrl: state => name => {
      return require(`@/assets/img/${state.theme}/${name}`);
    }
  },
  mutations: {
    updatePieces(state, position) {
      state.isCurrPlayerOne
        ? state.pieces.splice(position, 1, state.playerOnePiece)
        : state.pieces.splice(position, 1, state.playerTwoPiece);
    },
    updateCurrPlayer(state) {
      state.isCurrPlayerOne = !state.isCurrPlayerOne;
    }
  },
  actions: {}
});
